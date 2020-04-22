import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ item }) => {
  return (
    <div className={`${item.size} menu-item`}>
      <div
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{item.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
