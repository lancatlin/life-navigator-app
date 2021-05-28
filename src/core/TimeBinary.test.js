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
  const binary = TimeBinary.fromString(null, '001100101100');
  expect(binary.toString()).toBe('001100101100');
});

test('blank-times', () => {
  expect(TimeBinary.blankTime(null, 3).toString()).toBe('111111111111111111');
});

test('mix', () => {
  const b1 = TimeBinary.fromString(null, '00001111');
  const b2 = TimeBinary.fromString(null, '00111100');
  expect(b1.mix(b2).toString()).toStrictEqual('00001100');
});

test('not', () => {
  const b1 = TimeBinary.fromString(null, '00001111');
  expect(b1.not().toString()).toStrictEqual('11110000');
});

test('union', () => {
  const b1 = TimeBinary.fromString(null, '00001111');
  const b2 = TimeBinary.fromString(null, '00111100');
  expect(b1.union(b2).toString()).toStrictEqual('00111111');
});
