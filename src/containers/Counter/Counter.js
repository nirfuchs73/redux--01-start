import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.increment} />
        <CounterControl label="Decrement" clicked={this.props.decrement} />
        <CounterControl label="Add 5" clicked={() => this.props.addCounter(5)} />
        <CounterControl label="Subtract 5" clicked={() => this.props.subCounter(5)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => { dispatch({ type: 'INCREMENT' }) },
    decrement: () => { dispatch({ type: 'DECREMENT' }) },
    addCounter: (value) => { dispatch({ type: 'ADD_COUNTER', value: value }) },
    subCounter: (value) => { dispatch({ type: 'SUB_COUNTER', value: value }) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);