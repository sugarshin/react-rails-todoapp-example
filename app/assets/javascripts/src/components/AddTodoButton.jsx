import React, { Component, PropTypes } from 'react';

export default class AddTodoButton extends Component {

  static get propTypes() {
    return {
      onClick: PropTypes.func.isRequired
    };
  }

  render() {
    return (
      <div>
        <input type="text" ref="input" placeholder="Add todo" />
        <button onClick={this.handleClickButton.bind(this)}>Add</button>
      </div>
    );
  }

  handleClickButton() {
    this.props.onClick(this.refs.input.value);
  }

}
