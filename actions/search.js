export const SEARCH_PERFORM = 'SEARCH_PERFORM';
export const SEARCH_PERFORM_SUCCESS = 'SEARCH_PERFORM_SUCCESS';
export const QUERY_CHANGE = 'QUERY_CHANGE';

export function search(query) {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_PERFORM,
  		query: query,
    })

    const response = await fetch(`http://localhost:3001/${query}`, { method: 'get', credentials: 'same-origin' });
    const result = await response.json();
    dispatch({
      type: SEARCH_PERFORM_SUCCESS,
      result: result,
    })
  };
}

export function changeQuery(query){
	return {
		type: QUERY_CHANGE,
		query: query
	};
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
