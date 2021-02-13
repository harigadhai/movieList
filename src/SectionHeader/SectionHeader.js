import React from 'react';
import './style.css';

function SectionHeader(props) {
  return (
    <div className="sectionHeaderContainer">
      <header className="">
        {props.heading}
      </header>
    </div>
  );
}

export default SectionHeader;
