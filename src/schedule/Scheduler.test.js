import { expect, test } from '@jest/globals';
import Goal from './Goal';
import Scheduler from './Scheduler';
import Task from './Task';

test('remaining-times', () => {
  // should begin from 0:10
  const now = new Date(2021, 0, 1, 0, 8);
  const hours = 5;
  const scheduler = new Scheduler(now, hours);
  scheduler.tasks = [
    new Task({ startTime: new Date(2021, 0, 1, 1), endTime: new Date(2021, 0, 1, 3) }),
    new Task({ startTime: new Date(2021, 0, 1, 4), endTime: new Date(2021, 0, 1, 4, 30) }),
  ];
  const expectResult = '111110000000000001111110001111';
  expect(scheduler.remainingTimes().toString(2)).toStrictEqual(expectResult);
});

test('schedule-tasks-once', () => {
  const now = new Date(2021, 0, 1, 5);
  const hours = 10;

  // 6:00 to 12:00
  const morning = new Array(7).fill(0b000000111111000000000000);

  // 12:00 to 18:00
  const afternoon = new Array(7).fill(0b000000000000111111000000);

  const scheduler = new Scheduler(now, hours, [
    new Goal({
      id: 1,
      name: '#1',
      frequency: 3,
      eachTime: 2,
      expireAt: new Date(2021, 0, 14),
      session: morning,
    }),
    new Goal({
      id: 2,
      name: '#2',
      frequency: 2,
      eachTime: 3,
      expireAt: new Date(2021, 0, 10),
      session: afternoon,
    }),
  ]);
  const tasks = scheduler.Schedule();
  expect(tasks).toStrictEqual([
    new Task({
      goalId: 2,
      startTime: new Date(2021, 0, 1, 12),
      endTime: new Date(2021, 0, 1, 15),
    }),
    new Task({
      goalId: 1,
      startTime: new Date(2021, 0, 1, 6),
      endTime: new Date(2021, 0, 1, 8),
    }),
  ]);
});
