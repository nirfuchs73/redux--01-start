import * as actionTypes from './actionTypes';

export const saveResult = (value) => {
  return {
    type: actionTypes.STORE_RESULT,
    value
  }
}

export const storeResult = (value) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().counter.counter;
      console.log(oldCounter);
      dispatch(saveResult(value));
    }, 2000);
  }
}

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id
  }
}