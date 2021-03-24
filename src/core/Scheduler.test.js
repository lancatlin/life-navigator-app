import { expect, test } from '@jest/globals';
import Goal from './Goal';
import Scheduler from './Scheduler';
import Task from './Task';
import Session from './Session';

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
  expect(scheduler.remainingTimes().print()).toStrictEqual(expectResult);
});

test('schedule-tasks-once', () => {
  const now = new Date(2021, 0, 1, 5);
  const hours = 10;

  // 6:00 to 12:00
  const morning = Session.fromHours(6, 12);

  // 12:00 to 18:00
  const afternoon = Session.fromHours(12, 18);

  const scheduler = new Scheduler(now, hours, [
    new Goal({
      id: 1,
      name: '#1',
      frequency: 3,
      eachTime: 2,
      expireAt: new Date(2021, 0, 14),
      session: morning,
      tasks: [],
    }),
    new Goal({
      id: 2,
      name: '#2',
      frequency: 2,
      eachTime: 2.5,
      expireAt: new Date(2021, 0, 10),
      session: afternoon,
      tasks: [],
    }),
  ]);
  const tasks = scheduler.schedule();
  expect(tasks).toStrictEqual([
    new Task({
      goalId: 1,
      name: '#1',
      startTime: new Date(2021, 0, 1, 6),
      endTime: new Date(2021, 0, 1, 8),
    }),
    new Task({
      goalId: 2,
      name: '#2',
      startTime: new Date(2021, 0, 1, 12),
      endTime: new Date(2021, 0, 1, 14, 30),
    }),
  ]);
}, 1000);

test('schedule-tasks-multiple', () => {
  const now = new Date(2021, 0, 1, 5);
  const hours = 72;

  // 6:00 to 12:00
  const morning = Session.fromHours(6, 12);

  // 12:00 to 18:00
  const afternoon = Session.fromHours(12, 18);

  const scheduler = new Scheduler(now, hours, [
    new Goal({
      id: 1,
      name: '#1',
      frequency: 3,
      eachTime: 2,
      expireAt: new Date(2021, 0, 14),
      session: morning,
      tasks: [
        new Task({
          goalId: 1,
          startTime: new Date(2020, 11, 31, 8),
          endTime: new Date(2020, 11, 31, 10),
        }),
      ],
    }),
    new Goal({
      id: 2,
      name: '#2',
      frequency: 3,
      eachTime: 2.5,
      expireAt: new Date(2021, 0, 10),
      session: afternoon,
      tasks: [],
    }),
  ]);
  const tasks = scheduler.schedule();
  expect(tasks).toStrictEqual([
    new Task({
      goalId: 1,
      name: '#1',
      startTime: new Date(2021, 0, 1, 6),
      endTime: new Date(2021, 0, 1, 8),
    }),
    new Task({
      goalId: 2,
      name: '#2',
      startTime: new Date(2021, 0, 1, 12),
      endTime: new Date(2021, 0, 1, 14, 30),
    }),
    new Task({
      goalId: 1,
      name: '#1',
      startTime: new Date(2021, 0, 2, 6),
      endTime: new Date(2021, 0, 2, 8),
    }),
    new Task({
      goalId: 2,
      name: '#2',
      startTime: new Date(2021, 0, 2, 12),
      endTime: new Date(2021, 0, 2, 14, 30),
    }),
    new Task({
      goalId: 2,
      name: '#2',
      startTime: new Date(2021, 0, 3, 12),
      endTime: new Date(2021, 0, 3, 14, 30),
    }),
  ]);
}, 1000);
