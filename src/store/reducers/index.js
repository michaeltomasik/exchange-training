import { combineReducers } from 'redux';

import bookOrder from './bookOrder';
import ticker from './ticker';
import trades from './trades';

export default combineReducers({
  bookOrder,
  ticker,
  trades,
});
