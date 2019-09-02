const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0,
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INC_COUNTER':
      return Object.assign({}, state, { counter: state.counter + 1 })

    case 'ADD_COUNTER':
      return Object.assign({}, state, { counter: state.counter + action.value })

    default:
      return state;
  }
}

const store = createStore(rootReducer);
// console.log(store.getState());
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });

// console.log(store.getState());


