import { expect, test } from '@jest/globals';
import Task from './Task';

test('test-times-convertion', () => {
  const now = new Date(2021, 0, 1);
  const task = new Task({
    startTime: new Date(2021, 0, 1, 1, 15),
    endTime: new Date(2021, 0, 1, 2, 15),
  });
  // expect from 1:10 to 2:20
  const expectResult = BigInt('0b000000011111110000');
  expect(task.times(now, 3).toString(2)).toStrictEqual(expectResult.toString(2));
});
