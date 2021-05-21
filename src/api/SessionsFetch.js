/* eslint-disable import/prefer-default-export */
import Session from '../core/Session';
import api from './api';

export const fetchSessions = async () => {
  const response = await api.get('/sessions');
  return Session.fromList(response.data);
};
