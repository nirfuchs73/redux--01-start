import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.increment} />
        <CounterControl label="Decrement" clicked={this.props.decrement} />
        <CounterControl label="Add 5" clicked={this.props.addCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.subCounter} />
        <hr />
        <button onClick={() => this.props.storeResult(this.props.counter)}>Store Result</button>
        <ul>
          {this.props.results.map(result => {
            return <li key={result.id} onClick={() => this.props.deleteResult(result.id)}>{result.value}</li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    results: state.result.results,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => { dispatch({ type: actionTypes.INCREMENT }) },
    decrement: () => { dispatch({ type: actionTypes.DECREMENT }) },
    addCounter: () => { dispatch({ type: actionTypes.ADD_COUNTER, value: 5 }) },
    subCounter: () => { dispatch({ type: actionTypes.SUB_COUNTER, value: 5 }) },
    storeResult: (value) => { dispatch({ type: actionTypes.STORE_RESULT, value: value }) },
    deleteResult: (id) => { dispatch({ type: actionTypes.DELETE_RESULT, id: id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);