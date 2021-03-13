import { ADD_ORDERS } from '../types';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDERS:
      return {
        ...state,
        orders: [ ...action.data, ...state.orders].slice(0, 100)
      };
    default:
      return state;
  }
};
