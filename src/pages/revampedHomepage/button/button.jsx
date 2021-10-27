import React from 'react';
import './button.scss';

// create a button with a click event
// and a text
function Button(props) {
  return (
    <button
      className="button__brand button__brand--orange"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
