import { expect, test } from '@jest/globals';
import Goal from './Goal';

test('test-remaining-times', () => {
  const now = new Date(2021, 0, 1); // Friday

  const goal = new Goal({
    name: 'test',
    expireAt: new Date(2021, 0, 15),
    frequency: 5,
    duration: 20,
    eachTime: 1.5,
    session: new Array(7).fill(65408), // from 8:00 to 17:00
    tasks: [
      { startTime: new Date(2020, 11, 31, 9) }, // same week
      { startTime: new Date(2020, 11, 28, 13) }, // same week
      { startTime: new Date(2020, 11, 25, 17) }, // last week
    ],
  });

  expect(goal.remainingTimes(now)).toBe(3);
});
