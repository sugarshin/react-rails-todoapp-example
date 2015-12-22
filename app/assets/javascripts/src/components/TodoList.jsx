import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <div>{this.renderTodos()}</div>
    );
  }

  renderTodos() {
    const { onClickDelete, onClickToggle, todos } = this.props;
    return todos.map(todo => (
      <Todo key={todo.id}
            onClickDelete={onClickDelete}
            onClickToggle={onClickToggle}
            { ...todo } />
    ));
  }
}
