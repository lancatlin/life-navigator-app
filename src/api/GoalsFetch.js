/* eslint-disable import/prefer-default-export */
import api from './api';
import Goal from '../core/Goal';

export const fetchGoalList = async () => {
  console.log(BigInt(1));
  const response = await api.get('/goals');
  return response.data;
};
