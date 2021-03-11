import React from 'react';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul className="feedback__buttons">
        {options.map(el => (
          <li key={el}>
            <button type="button" name={el} onClick={onLeaveFeedback}>
              {el}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
