/* eslint-disable import/prefer-default-export */
import { useQuery } from 'react-query';
import api from './api';
import Goal from '../core/Goal';

export const fetchGoalList = async () => {
  const response = await api.get('/goals');
  return Goal.fromList(response.data);
};

export const fetchGoalDetail = async (id) => {
  const response = await api.get(`/goals/${id}`);
  return new Goal(response.data);
};

export const useGoals = () => useQuery('goals', fetchGoalList);
