import { test } from '@jest/globals';
import Goal from './Goal';
import Scheduler from './Scheduler';
import { hoursToSessions } from './utils';
import TaskShower from './TaskShower';

const now = new Date(2021, 0, 1);

const hours = 24 * 7;

const morning = new Array(7).fill(hoursToSessions(8, 12));
const afternoon = new Array(7).fill(hoursToSessions(13, 18));
const day = new Array(7).fill(hoursToSessions(8, 18));
const night = new Array(7).fill(hoursToSessions(19, 23));
const allDay = new Array(7).fill(hoursToSessions(8, 23));

const goals = [
  new Goal({
    id: 1,
    name: 'Calculus Exam',
    expireAt: new Date(2021, 0, 1, 30),
    duration: 20,
    frequency: 5,
    eachTime: 2,
    session: day,
  }),
  new Goal({
    id: 2,
    name: 'Programming Project',
    expireAt: new Date(2021, 0, 1, 28),
    duration: 15,
    frequency: 3,
    eachTime: 3,
    session: afternoon,
  }),
  new Goal({
    id: 3,
    name: 'Music Performance',
    expireAt: new Date(2021, 0, 1, 21),
    duration: null, // no limit
    frequency: 7,
    eachTime: 1,
    session: allDay,
  }),
  new Goal({
    id: 4,
    name: 'Reading',
    expireAt: new Date(2021, 0, 1, 25),
    duration: null,
    frequency: 5,
    eachTime: 1,
    session: night,
  }),
  new Goal({
    id: 5,
    name: 'Writing',
    expireAt: null,
    duration: null,
    frequency: 2,
    eachTime: 4,
    session: morning,
  }),
  new Goal({
    id: 6,
    name: 'Physics',
    expireAt: new Date(2021, 0, 1, 18),
    duration: 15,
    frequency: 4,
    eachTime: 2,
    session: afternoon,
  }),
  new Goal({
    id: 7,
    name: 'Netflix',
    eachTime: 2,
    frequency: 3,
    session: night,
  }),
];

test('integration-no-existed-tasks', () => {
  const scheduler = new Scheduler(now, hours, goals);
  const tasks = scheduler.schedule();
  const shower = new TaskShower(now, tasks);
  console.log(shower.outputTable());
});
