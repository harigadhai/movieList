import React from 'react';
import './style.css';

function Button(props) {
  return (
    <div className="buttonContainer">
      <header className="">
        {props.heading}
      </header>
    </div>
  );
}

export default Button;
