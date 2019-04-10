import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount = () => {
    console.log('componentDidMount');
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  }

  updateCount = (count) => {
    this.setState({count})
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>Total Task: {this.state.count}</h1>                
        <TodoList title="My Task List" update={this.updateCount}/>
      </div>
    );
  }
}

export default App;
