import React from 'react';
import Item from '../item/Item';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <Item key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
