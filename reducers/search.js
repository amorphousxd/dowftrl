import { SEARCH_PERFORM, SEARCH_PERFORM_SUCCESS, QUERY_CHANGE } from '../actions/search';

const initialState = {
	results: []
}

export default function search(state = initialState, action) {
  switch (action.type) {
	  case SEARCH_PERFORM:
			return state;
		case SEARCH_PERFORM_SUCCESS:
			console.log(action);
			return Object.assign({}, state, {
				query: action.query,
				results: [...state.results, action.result]
			});
	  default:
	    return state;
  }
}
