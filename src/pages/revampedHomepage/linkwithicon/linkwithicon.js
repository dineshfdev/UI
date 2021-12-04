import React from 'react';
import './linkwithicon.scss';

function LinkWithIcon(props) {
  return (
    <div className="link-with-icon-container">
      <a href={props.link}>
        <img className="link-with-icon-icon" src={props.icon} alt={props.alt} />
        <span>{props.text}</span>
      </a>
    </div>
  );
}

export default LinkWithIcon;
