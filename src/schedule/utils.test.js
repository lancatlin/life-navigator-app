import { test, expect } from '@jest/globals';
import { beginOfWeek, tomorrow } from './utils';

test('begin-of-week', () => {
  expect(beginOfWeek(new Date(2021, 0, 1))).toStrictEqual(new Date(2020, 11, 27));
});

test('tomorrow', () => {
  const date = new Date(2021, 0, 1, 9, 32, 32);
  expect(tomorrow(date))
    .toStrictEqual(new Date(2021, 0, 2));
  expect(date).toStrictEqual(new Date(2021, 0, 1, 9, 32, 32));
  expect(tomorrow(new Date(2021, 11, 31, 12)))
    .toStrictEqual(new Date(2022, 0, 1));
});
