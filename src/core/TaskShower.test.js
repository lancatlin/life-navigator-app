import { test } from '@jest/globals';
import TaskShower from './TaskShower';
import Task from './Task';

test('test-show-tasks', () => {
  const now = new Date(2021, 0, 1);
  const tasks = [
    new Task({
      name: 'Study',
      startTime: new Date(2021, 0, 2, 8),
      endTime: new Date(2021, 0, 2, 12),
    }),
    new Task({
      name: 'Exercise',
      startTime: new Date(2021, 0, 1, 13),
      endTime: new Date(2021, 0, 1, 16),
    }),
    new Task({
      name: 'Programming',
      startTime: new Date(2021, 0, 1, 6),
      endTime: new Date(2021, 0, 1, 10),
    }),
  ];
  const shower = new TaskShower(now, tasks);
  console.log(shower.outputTable());
});
