import { expect, test } from '@jest/globals';
import Goal from './Goal';
import Task from './Task';
import TimeBinary from './TimeBinary';
import Session from './Session';

test('test-remaining-frequency', () => {
  const now = new Date(2021, 0, 1); // Friday

  const goal = new Goal({
    name: 'test',
    expireAt: new Date(2021, 0, 15),
    frequency: 5,
    eachTime: 1.5,
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
    session: new Session({ times: new Array(7).fill(0b000000001111111110000000) }),
  });
  const availableTime = TimeBinary.fromTime(
    now, hours,
    new Date(2021, 0, 1, 12),
    new Date(2021, 0, 1, 16),
  );
  expect(goal.remainingTimes(now, hours, availableTime).print())
    .toBe('111111000000000000');
});

test('remaining-time-include-tasks', () => {
  const now = new Date(2021, 0, 1, 20);
  const hours = 5;
  const goal = new Goal({
    session: new Session(
      { times: new Array(7).fill((1 << 24) - 1) },
    ),
    tasks: [
      new Task({
        startTime: new Date(2021, 0, 1, 22),
        endTime: new Date(2021, 0, 1, 23),
      }),
    ],
  });
  const availableTime = TimeBinary.fromTime(
    now, hours,
    new Date(2021, 0, 1, 21),
  );
  expect(goal.remainingTimes(now, hours, availableTime).print())
    .toBe('000000111111000000000000111111');
});

test('schedule-one-task', () => {
  const now = new Date(2021, 0, 1, 9);
  const hours = 4;
  const goal = new Goal({
    id: 1,
    frequency: 1,
    eachTime: 2.5,
    session: new Session({ times: new Array(7).fill(0b000000001111111100000000) }),
  });
  const availableTime = TimeBinary.fromTime(
    now, hours,
    new Date(2021, 0, 1, 10, 10),
    new Date(2021, 0, 1, 15),
  );
  // expect a task from 10:00 to 12:00
  expect(goal.scheduleOneTask(now, hours, availableTime))
    .toStrictEqual(new Task({
      goalId: 1,
      name: undefined,
      startTime: new Date(2021, 0, 1, 10, 10),
      endTime: new Date(2021, 0, 1, 12, 40),
    }));
});

test('schedule-one-task-2', () => {
  const now = new Date(2021, 0, 1, 9);
  const hours = 5;
  const goal = new Goal({
    id: 1,
    frequency: 1,
    eachTime: 2.5,
    session: new Session(
      { times: new Array(7).fill(0b000000000001111111100000) },
    ),
    // from 11:00 to 19:00
  });
  const availableTime = TimeBinary.fromTime(
    now, hours,
    new Date(2021, 0, 1, 1),
    new Date(2021, 0, 1, 15, 30),
  );
  // expect from 11:00 to 13:30
  expect(goal.scheduleOneTask(now, hours, availableTime))
    .toStrictEqual(new Task({
      goalId: 1,
      name: undefined,
      startTime: new Date(2021, 0, 1, 11),
      endTime: new Date(2021, 0, 1, 13, 30),
    }));
});

test('goal-ignore-times', () => {
  const now = new Date(2021, 0, 1, 20);
  const hours = 4 + 24;
  const goal = new Goal({
    tasks: [
      new Task({
        startTime: new Date(2021, 0, 1, 17),
        endTime: new Date(2021, 0, 1, 19),
      }),
      new Task({
        startTime: new Date(2021, 0, 2, 12),
        endTime: new Date(2021, 0, 2, 15),
      }),
    ],
  });
  expect(goal.ignoreTimes(now, hours).print())
    .toBe(`111111111111111111111111${
      TimeBinary.fromTime(
        new Date(2021, 0, 2),
        24,
        new Date(2021, 0, 2, 12),
        new Date(2021, 0, 3),
      ).print()}`);
});
