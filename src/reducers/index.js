import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReduser } from './user';

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReduser,
})