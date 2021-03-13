import { expect, test } from '@jest/globals';
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
