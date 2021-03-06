import { test, expect } from '@jest/globals';
import Session from './Session';

test('session-to-binary', () => {
  // test from 11:00 ~ 14:00
  const now = new Date(2021, 0, 2, 22, 10); // Saturday
  const hours = 3;
  // from Saturday 22:00 to Sunday 01:00
  const session = new Session({
    times: [
      '010000000000000000000000',
      ...new Array(6).fill('100000000000101111111110'),
    ],
  });
  expect(session.toBinary(now, hours).toString())
    .toBe('111110000000000001');
});

test('hours-to-session', () => {
  expect(Session.fromHours(6, 12).times)
    .toStrictEqual(new Array(7).fill('000000111111000000000000'));
});
