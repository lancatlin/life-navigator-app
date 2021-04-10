/* eslint-disable import/prefer-default-export */
import api from './api';

export const fetchGoalList = async () => {
  const response = await api.get('/goals');
  return response.data;
};
