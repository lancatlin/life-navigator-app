/* eslint-disable import/prefer-default-export */
import api from './api';

export const fetchSessions = async () => {
  const response = await api.get('/sessions');
  return response.data;
};
