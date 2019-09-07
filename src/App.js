import React from 'react';
import './App.css';
import { IncrementCount, DecrementCount } from './actions/counter.action';
import { connect } from 'react-redux';

// Container - component : Connected to STORE
class App extends React.Component {

  state = {
    count: '0',
  }

  handleIncrement = () => {
    const { _IncrementCount } = this.props;
    _IncrementCount(); // Dispatch an Action
  }

  handleDecrement = () => {
    const { _DecrementCount } = this.props;
    _DecrementCount(); // Dispatch an Action
  }

  render() {
    const { count } = this.props;
    return (
      <div className="App">Counter....{count}<br></br>
        <button onClick={this.handleIncrement}>
          Increment
          </button>
        <button onClick={this.handleDecrement}>
          Decrement
          </button>
        <br></br>
      </div>
    );
  }
}

// Get store to the Componemt
const mapStoreToProps = (store) => ({
  count: store.count,
});

// To dispatch Specific Action written in action.js File
const mapDispatchToProps = (dispatch) => ({
  _IncrementCount: () => {
    dispatch(IncrementCount())
  },
  _DecrementCount: () => {
    dispatch(DecrementCount())
  },
});

// connect: Used to connect STORE to the component.
// Hence, Dispatch and store is availabe in component)
export default connect(mapStoreToProps, mapDispatchToProps)(App);