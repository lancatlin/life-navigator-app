import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { fetchGoalList } from '../api/GoalsFetch';
import { fetchSessions } from '../api/SessionsFetch';
import Scheduler from '../core/Scheduler';

const getSchedule = async () => {
  /*
  try {
    const tasks = await AsyncStorage.getItem('schedule');
    if (tasks) {
      console.log(tasks);
      return tasks;
    }
  } catch (e) {
    console.log(e);
  }
  */
  const goals = await fetchGoalList();
  const sessions = await fetchSessions();
  for (const goal of goals) {
    goal.session = sessions.find((session) => session.id === goal.sessionId);
  }
  const now = new Date();
  const scheduler = new Scheduler(now, 24 * 3, goals);
  const tasks = scheduler.schedule();
  // await AsyncStorage.setItem('schedule', tasks);
  return tasks;
};

const useSchedule = () => {
  const [isLoading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const callback = async () => {
      const result = await getSchedule();
      setTasks(result);
      setLoading(false);
    };
    callback();
  }, []);
  return { tasks, isLoading };
};

export default useSchedule;
