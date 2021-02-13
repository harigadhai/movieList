import React from 'react';
import './style.css';

function PromoTileWrapper(props) {
  return (
    <div className="promoTileWrapperContainer">
      <header className="">
        {props.heading}
      </header>
    </div>
  );
}

export default PromoTileWrapper;
