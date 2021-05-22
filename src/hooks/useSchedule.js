import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { fetchGoalList } from '../api/GoalsFetch';
import { fetchSessions } from '../api/SessionsFetch';
import Scheduler from '../core/Scheduler';

const loadFromStorage = async () => {
  try {
    const tasks = await AsyncStorage.getItem('@schedule');
    console.log(tasks);
    if (tasks !== null) {
      return JSON.parse(tasks, (key, value) => {
        console.log(key, value);
        if (key === 'startTime' || key === 'endTime') {
          return new Date(value);
        }
        return value;
      });
    }
  } catch (e) {
    console.log(e);
  }
  return [];
};

const getSchedule = async () => {
  const goals = await fetchGoalList();
  const sessions = await fetchSessions();
  for (const goal of goals) {
    goal.session = sessions.find((session) => session.id === goal.sessionId);
  }
  const now = new Date();
  const scheduler = new Scheduler(now, 24 * 3, goals);
  const tasks = scheduler.schedule();
  return tasks;
};

const useSchedule = () => {
  const [isLoading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const load = async () => {
    const result = await loadFromStorage();
    setTasks(result);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  const reload = async () => {
    setLoading(true);
    const result = await getSchedule();
    const data = JSON.stringify(result);
    await AsyncStorage.setItem('@schedule', data);
    setTasks(result);
    setLoading(false);
  };
  return {
    tasks, isLoading, reload, load,
  };
};

export default useSchedule;
