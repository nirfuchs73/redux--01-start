import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return Object.assign({}, state, { counter: state.counter + 1 });

    case actionTypes.DECREMENT:
      return Object.assign({}, state, { counter: state.counter - 1 });

    case actionTypes.ADD_COUNTER:
      return Object.assign({}, state, { counter: state.counter + action.value });

    case actionTypes.SUB_COUNTER:
      return Object.assign({}, state, { counter: state.counter - action.value });

    case actionTypes.STORE_RESULT:
      return Object.assign({}, state, { results: state.results.concat({ id: new Date(), value: state.counter }) });

    case actionTypes.DELETE_RESULT:
      const results = state.results.filter(result => result.id !== action.id)
      return Object.assign({}, state, { results: results });

    default:
      return state;
  }
}

export default reducer;