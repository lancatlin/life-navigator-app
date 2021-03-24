import { test, expect } from '@jest/globals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SessionManager from './SessionManager';
import Session from '../core/Session';
import { sessionKey } from './keys';

test('add-session', async () => {
  const session = new Session({
    id: 1,
    name: 'morning',
    times: new Array(7).fill(0),
  });
  await SessionManager.add(session);
  expect(AsyncStorage.setItem(sessionKey)).toBeCalledWith(session);
  expect(AsyncStorage.setItem(sessionKey)).toHaveBeenCalledTimes(1);
});
