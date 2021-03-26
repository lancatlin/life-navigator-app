import AsyncStorage from '@react-native-async-storage/async-storage';
import Session from '../core/Session';
import { sessionKey } from './keys';

class SessionManager {
  constructor() {
    this.sessions = [];
  }

  static async create() {
    const manager = new SessionManager();
    await manager.load();
    return manager;
  }

  async load() {
    try {
      this.sessions = await AsyncStorage.getItem(sessionKey);
    } catch (err) {
      console.error(err);
    }
  }

  get() {
    return this.sessions;
  }

  async add(session) {
    try {
      await AsyncStorage.setItem(sessionKey, [...this.sessions, session]);
    } catch (err) {
      console.error(err);
    }
  }
}

export default SessionManager;
