import { ADD_ORDERS } from '../types/index';

export const addOrders = (data) => ({
  type: ADD_ORDERS,
  data, // array
});
