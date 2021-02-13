import React from 'react';
import './style.css';

function Image(props) {
  return (
    <div className="imageContainer">
      <header className="">
        {props.heading}
      </header>
    </div>
  );
}

export default Image;
