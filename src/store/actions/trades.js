import { ADD_TRADES } from '../types/index';

export const addTrades = (data) => ({
  type: ADD_TRADES,
  data,
});
