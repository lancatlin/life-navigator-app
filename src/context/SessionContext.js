import createDataContext from './createDataContext';
import SessionManager from '../storage/SessionManager';

const reducer = (state) => state;

export const { Context, Provider } = createDataContext(
  reducer,
  {},
  SessionManager.create(),
);
