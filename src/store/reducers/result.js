import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return Object.assign({}, state, { results: state.results.concat({ id: new Date(), value: action.value * 2 }) });

    case actionTypes.DELETE_RESULT:
      const results = state.results.filter(result => result.id !== action.id)
      return Object.assign({}, state, { results: results });

    default:
      return state;
  }
}

export default reducer;