import { ADD_TICKER } from '../types';

// [
//     SYMBOL,
//     BID, 
//     BID_SIZE, 
//     ASK, 
//     ASK_SIZE, 
//     DAILY_CHANGE, 
//     DAILY_CHANGE_RELATIVE, 
//     LAST_PRICE, 
//     VOLUME, 
//     HIGH, 
//     LOW
//   ]
const initialState = {
  tickerInfo: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKER:
      return {
        ...state,
        tickerInfo: [ ...action.data]
      };
    default:
      return state;
  }
};
