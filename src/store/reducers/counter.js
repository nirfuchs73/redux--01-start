import * as actionTypes from '../actions/actions';

const initialState = {
  counter: 0,
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

    default:
      return state;
  }
}

export default reducer;