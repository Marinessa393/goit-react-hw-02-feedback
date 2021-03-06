import React, { Component } from 'react';
import '../App.css';

export default class FeedbackOptions extends Component {
  addVote = e => {
    this.props.onLeaveFeedback(e.target.getAttribute('name'));
  };

  render() {
    const { options } = this.props;
    return (
      <>
        <ul className="feedback__buttons">
          {options.map(el => (
            <li>
              <button type="button" name={el} onClick={this.addVote}>
                {el}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
