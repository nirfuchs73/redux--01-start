export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_COUNTER = 'ADD_COUNTER';
export const SUB_COUNTER = 'SUB_COUNTER';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}

export const addCounter = (value) => {
  return {
    type: ADD_COUNTER,
    value
  }
}

export const subCounter = (value) => {
  return {
    type: SUB_COUNTER,
    value
  }
}

export const saveResult = (value) => {
  return {
    type: STORE_RESULT,
    value
  }
}

export const storeResult = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(value));
    }, 2000);
  }
}

export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    id
  }
}