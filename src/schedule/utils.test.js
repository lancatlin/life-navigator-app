import { test, expect } from '@jest/globals';
import {
  beginOfWeek, displayBinary, newTimes, sessionToBinary, tomorrow,
} from './utils';

test('begin-of-week', () => {
  expect(beginOfWeek(new Date(2021, 0, 1))).toStrictEqual(new Date(2020, 11, 27));
});

test('session-to-binary', () => {
  // test from 11:00 ~ 14:00
  const now = new Date(2021, 0, 2, 22, 10); // Saturday
  const hours = 3;
  // from Saturday 22:00 to Sunday 01:00
  const session = [
    0b010000000000000000000000,
    ...new Array(6).fill(0b100000000000101111111110),
  ];
  expect(sessionToBinary(now, hours, session).toString(2))
    .toBe('111110000000000001');
});

test('display-binary', () => {
  const binary = 0b00110010n;
  expect(displayBinary(binary, 8)).toBe('00110010');
});

test('new-times', () => {
  expect(newTimes(3)).toBe(BigInt(0b111111111111111111));
});

test('tomorrow', () => {
  const date = new Date(2021, 0, 1, 9, 32, 32);
  expect(tomorrow(date))
    .toStrictEqual(new Date(2021, 0, 2));
  expect(date).toStrictEqual(new Date(2021, 0, 1, 9, 32, 32));
});
