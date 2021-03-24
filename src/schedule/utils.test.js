import { test, expect } from '@jest/globals';
import {
  beginOfWeek, hoursToSessions, newTimes, tomorrow,
} from './utils';

test('begin-of-week', () => {
  expect(beginOfWeek(new Date(2021, 0, 1))).toStrictEqual(new Date(2020, 11, 27));
});

test('new-times', () => {
  expect(newTimes(3)).toBe(BigInt(0b111111111111111111));
});

test('tomorrow', () => {
  const date = new Date(2021, 0, 1, 9, 32, 32);
  expect(tomorrow(date))
    .toStrictEqual(new Date(2021, 0, 2));
  expect(date).toStrictEqual(new Date(2021, 0, 1, 9, 32, 32));
  expect(tomorrow(new Date(2021, 11, 31, 12)))
    .toStrictEqual(new Date(2022, 0, 1));
});

test('hours-to-session', () => {
  expect(hoursToSessions(6, 12)).toBe(0b000000111111000000000000);
});
