import { test, expect } from '@jest/globals';
import TimeBinary from './TimeBinary';

test('time-to-binary', () => {
  const now = new Date(2021, 0, 1, 8);
  const hours = 5;
  expect(TimeBinary.fromTime(
    now, hours,
    new Date(2021, 0, 1, 9),
    new Date(2021, 0, 1, 12),
  ).toString())
    .toBe('000000111111111111111111000000');
  expect(TimeBinary.fromTime(
    now, hours,
    new Date(2021, 0, 1, 9),
  ).toString())
    .toBe('000000111111111111111111111111');
  expect(TimeBinary.fromTime(
    now, hours, null,
    new Date(2021, 0, 1, 9),
  ).toString())
    .toBe('111111000000000000000000000000');
});

test('display-binary', () => {
  const binary = new TimeBinary(null, 2, '001100101100');
  expect(binary.toString()).toBe('001100101100');
});

test('blank-times', () => {
  expect(TimeBinary.blankTime(null, 3).toString()).toBe('111111111111111111');
});
