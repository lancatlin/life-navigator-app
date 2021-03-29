import { test, expect } from '@jest/globals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SessionManager from './SessionManager';
import Session from '../core/Session';
import { sessionKey } from './keys';

test('test-load-sessions', async () => {
  const sessions = [Session.fromHours(8, 17, {
    id: 1,
    name: 'default',
  })];
  AsyncStorage.getItem.mockReturnValue(sessions);
  const manager = await SessionManager.create();
  expect(manager.get()).toStrictEqual(sessions);
});

test('add-session', async () => {
  const sessions = [Session.fromHours(8, 17, {
    id: 1,
    name: 'default',
  })];
  const session = Session.fromHours(8, 12, {
    id: 2,
    name: 'morning',
  });
  AsyncStorage.getItem.mockReturnValue(sessions);
  const manager = await SessionManager.create();
  await manager.add(session);
  expect(AsyncStorage.getItem).toBeCalled();
  expect(AsyncStorage.setItem).toBeCalledWith(sessionKey, [...sessions, session]);
  expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
});

test('update-session', async () => {
  const sessions = [Session.fromHours(8, 17, {
    id: 1,
    name: 'default',
  }), Session.fromHours(8, 12, {
    id: 2,
    name: 'morning',
  })];
  AsyncStorage.getItem.mockReturnValue(sessions);
  const manager = await SessionManager.create();
  const newSession = Session.fromHours(13, 17);
  await manager.update(2, { name: 'afternoon', times: newSession.times });
  expect(AsyncStorage.setItem).toBeCalledWith(
    sessionKey, [sessions[0], Session.fromHours(13, 17, { id: 2, name: 'afternoon' })],
  );
});

test('update-session-partial', async () => {
  const sessions = [Session.fromHours(8, 17, {
    id: 1,
    name: 'default',
  }), Session.fromHours(8, 12, {
    id: 2,
    name: 'morning',
  })];
  AsyncStorage.getItem.mockReturnValue(sessions);
  const manager = await SessionManager.create();
  const newSession = Session.fromHours(9, 11);
  await manager.update(2, { times: newSession.times });
  expect(AsyncStorage.setItem).toBeCalledWith(
    sessionKey, [sessions[0], Session.fromHours(9, 11, { id: 2, name: 'morning' })],
  );
});

test('delete-session', async () => {
  const sessions = [Session.fromHours(8, 17, {
    id: 1,
    name: 'default',
  }), Session.fromHours(8, 12, {
    id: 2,
    name: 'morning',
  })];
  AsyncStorage.getItem.mockReturnValue(sessions);

  const manager = await SessionManager.create();
  await manager.delete(2);
  expect(AsyncStorage.setItem).toBeCalledWith(
    sessionKey, sessions.slice(0, 1),
  );
});
