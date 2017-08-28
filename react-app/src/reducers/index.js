import { combineReducers } from 'redux';

import merchants from './merchants';
import products from './products';
import purchases from './purchases';
import purchasedTransactions from './purchasedTransactions';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import tabDisplayFilter from './tabDisplayFilter';

const rootReducer = combineReducers({
  merchants,
  products,
  purchases,
  purchasedTransactions,
  todos,
  visibilityFilter,
  tabDisplayFilter
});

export default rootReducer;
