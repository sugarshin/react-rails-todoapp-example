import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  static get propTypes() {
    return {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      onClickToggle: PropTypes.func.isRequired,
      onClickDelete: PropTypes.func.isRequired
    };
  }

  render() {
    const { completed, title } = this.props;

    return (
      <div style={{
        opacity: completed ? .5 : 1,
        textDecoration: completed ? 'line-through' : 'none'
      }}>
        <input type="checkbox" checked={completed} onChange={this.handleClickCheckbox.bind(this)} />
        <span>{title}</span>
        <button onClick={this.handleClickDelete.bind(this)}>Delete</button>
      </div>
    );
  }

  handleClickCheckbox() {
    this.props.onClickToggle(this.props.id);
  }

  handleClickDelete() {
    this.props.onClickDelete(this.props.id);
  }
}
