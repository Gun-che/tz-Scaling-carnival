import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { userReducer } from './user';
import { modalReducer } from './modal'

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  modal: modalReducer,
})