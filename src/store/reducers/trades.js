import { ADD_TRADES } from '../types';

// on trading pairs (ex. tBTCUSD)
// [
//   [
//     ID,
//     MTS,
//     AMOUNT,
//     PRICE
//   ]
// ]
const initialState = {
  trades: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRADES:
      return {
        ...state,
        trades: [action.data, ...state.trades]
      };
    default:
      return state;
  }
};
