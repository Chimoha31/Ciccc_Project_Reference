import {combineReducers} from 'redux';
import shoppingReducer from './Shopping/shopping-reducer';

const rootReducer = combineReducers({
  shoppingReducer
});

export default rootReducer;