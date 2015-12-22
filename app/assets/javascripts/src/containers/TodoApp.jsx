import React, { Component } from 'react';
import axios from 'axios';
import TodoList from '../components/TodoList';
import AddTodoButton from '../components/AddTodoButton';

export default class TodoApp extends Component {
  static get defaultProps() {
    return {
      todos: []
    };
  }

  constructor(props) {
    super(props);

    const { todos } = this.props;
    this.state = { todos };
  }

  render() {
    return (
      <div>
        <AddTodoButton onClick={this.addTodo.bind(this)} />
        <TodoList todos={this.state.todos}
                  onClickDelete={this.deleteTodo.bind(this)}
                  onClickToggle={this.toggleComplete.bind(this)} />
      </div>
    );
  }

  addTodo(title) {
    axios.post('/todos', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      data: JSON.stringify({
        title,
        completed: false
      })
    }).then((a, b, c) => {
      console.log(a, b, c);
      this.setState({
        todos: [...this.state.todos, {
          id: Date.now(),
          complete: false,
          title
        }]
      });
    });

  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleComplete(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      })
    });
  }
}
