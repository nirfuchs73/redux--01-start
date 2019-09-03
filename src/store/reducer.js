const initialState = {
  counter: 0,
  results: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { counter: state.counter + 1 });

    case 'DECREMENT':
      return Object.assign({}, state, { counter: state.counter - 1 });

    case 'ADD_COUNTER':
      return Object.assign({}, state, { counter: state.counter + action.value });

    case 'SUB_COUNTER':
      return Object.assign({}, state, { counter: state.counter - action.value });

    case 'STORE_RESULT':
      return Object.assign({}, state, { results: state.results.concat({ id: new Date(), value: state.counter }) });

    case 'DELETE_RESULT':
      const results = state.results.filter(result => result.id !== action.id)
      return Object.assign({}, state, { results: results });

    default:
      return state;
  }
}

export default reducer;