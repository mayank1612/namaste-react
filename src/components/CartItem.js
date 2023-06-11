import React from 'react';
import { IMG_CDN_URL } from '../contants';

function CartItem(prop) {
  const { imageId, price, name, category } = prop.item;
  return (
    <div className="m-2 p-2 bg-pink-50">
      <img src={IMG_CDN_URL + imageId} />
      <h2>Restaurant Name: {name}</h2>
      <h2>Price: {price / 100}</h2>
      <h2>category: {category}</h2>
    </div>
  );
}

export default CartItem;
