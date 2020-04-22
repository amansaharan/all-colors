import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

export class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionsProps }) => {
          return <CollectionPreview key={id} {...collectionsProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
