import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', todos: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const { todos } = this.state;
    todos.push(this.state.value);
    this.setState({todos: todos, value: ""})
    event.preventDefault();
  }

  handleDelete(position) {
    return () => {
      let { todos } = this.state;
      todos.splice(position, 1);
      this.setState({todos: todos});
    }
  }

  render() {
    const list = this.state.todos.map ((todo, idx) => {
      return <li><span>{todo}</span> <button onClick={this.handleDelete(idx)}>supprimer </button></li>
    });
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default App;
