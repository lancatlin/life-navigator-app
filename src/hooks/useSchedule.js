import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { fetchGoalList } from '../api/GoalsFetch';
import { fetchSessions } from '../api/SessionsFetch';
import Scheduler from '../core/Scheduler';

const getSchedule = async () => {
  console.log('get schedule');
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
  console.log('goals: ', goals);
  const now = new Date();
  console.log('now: ', typeof now);
  const scheduler = new Scheduler(now, 24 * 3, goals);
  console.log('scheduler: ', scheduler);
  const tasks = scheduler.schedule();
  console.log('tasks: ', tasks);
  await AsyncStorage.setItem('schedule', tasks);
  return tasks;
};

const useSchedule = () => {
  console.log('useSchedule');
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log('useEffect');
    const callback = async () => {
      const result = await getSchedule();
      console.log('result: ', result);
      setTasks(result);
    };
    callback();
    console.log('set');
  });
  return tasks;
};

export default useSchedule;
