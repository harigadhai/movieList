import React from 'react';
import './style.css';

function PromoTile(props) {
  return (
    <div className="promoTileContainer">
      <header className="">
        {props.heading}
      </header>
    </div>
  );
}

export default PromoTile;
