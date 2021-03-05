import { expect, test } from '@jest/globals';
import Goal from './Goal';
import { timeToBinary } from './utils';

test('test-remaining-frequency', () => {
  const now = new Date(2021, 0, 1); // Friday

  const goal = new Goal({
    name: 'test',
    expireAt: new Date(2021, 0, 15),
    frequency: 5,
    duration: 20,
    eachTime: 1.5,
    session: new Array(7).fill(0b000000001111111100000000), // from 8:00 to 17:00
    tasks: [
      { startTime: new Date(2020, 11, 31, 9) }, // same week
      { startTime: new Date(2020, 11, 28, 13) }, // same week
      { startTime: new Date(2020, 11, 25, 17) }, // last week
    ],
  });

  expect(goal.remainingFrequency(now)).toBe(3);
});

test('remaining-time-binary', () => {
  const now = new Date(2021, 0, 1, 15);
  const hours = 3;
  const goal = new Goal({
    session: new Array(7).fill(0b000000001111111110000000),
  });
  const availableTime = timeToBinary(
    now, hours,
    new Date(2021, 0, 1, 15),
    new Date(2021, 0, 1, 16),
  );
  expect(goal.remainingTimes(availableTime, now, hours).toString(2)).toBe('111111000000000000');
});
