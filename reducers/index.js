import { combineReducers } from 'redux';
import counter from './counter';
import search from './search';
import { routerStateReducer as router } from 'redux-router';

const rootReducer = combineReducers({
  counter,
	router,
  search
});

export default rootReducer;
