import React from 'react';
import './Item.scss';

const Item = ({ id, name, price, imageUrl }) => {
  return (
    <div className="item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default Item;
