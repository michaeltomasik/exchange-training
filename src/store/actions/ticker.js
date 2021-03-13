import { ADD_TICKER } from '../types/index';

export const addTicker = (data) => ({
  type: ADD_TICKER,
  data,
});
