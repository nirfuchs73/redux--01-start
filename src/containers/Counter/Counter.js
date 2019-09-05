import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actionCreators from '../../store/actions/actions';

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
    increment: () => { dispatch(actionCreators.increment()) },
    decrement: () => { dispatch(actionCreators.decrement()) },
    addCounter: () => { dispatch(actionCreators.addCounter(5)) },
    subCounter: () => { dispatch(actionCreators.subCounter(5)) },
    storeResult: (value) => { dispatch(actionCreators.storeResult(value)) },
    deleteResult: (id) => { dispatch(actionCreators.deleteResult(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);