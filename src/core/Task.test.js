import { expect, test } from '@jest/globals';
import Task from './Task';

test('test-times-convertion', () => {
  const now = new Date(2021, 0, 1);
  const task = new Task({
    startTime: new Date(2021, 0, 1, 1, 15),
    endTime: new Date(2021, 0, 1, 2, 15),
  });
  // expect from 1:10 to 2:20
  expect(task.times(now, 3).toString()).toStrictEqual('000000011111110000');
});

test('test-set-time-from-time-unit', () => {
  const now = new Date(2021, 0, 1, 8);
  const task = Task.createTaskFromTimeUnit(now, 8, 21);
  expect(task).toStrictEqual(new Task({
    startTime: new Date(2021, 0, 1, 9, 20),
    endTime: new Date(2021, 0, 1, 11, 30),
  }));
  // check whether now has been changed.
  expect(now).toStrictEqual(new Date(2021, 0, 1, 8));
});

test('ignore-times', () => {
  const now = new Date(2021, 0, 1, 20);
  const hours = 5;
  const task = new Task({
    startTime: new Date(2021, 0, 1, 21),
    endTime: new Date(2021, 0, 1, 22),
  });
  expect(task.ignoreTimes(now, hours).toString()).toBe(
    '000000111111111111111111000000',
  );
});
