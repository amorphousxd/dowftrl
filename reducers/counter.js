import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

const initialState = {
	counter: 0,
	something: 0
}

export default function counter(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
		console.log(action)
		return Object.assign({}, state, {
			counter: state.counter + action.count || 1
		});
    //return state.counter = state.counter + 1;
  case DECREMENT_COUNTER:
		console.log(action)
		return Object.assign({}, state, {
			counter: state.counter - 1
		});
  default:
    return state;
  }
}
