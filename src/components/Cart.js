import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../utils/cartSlice';
import { useContext } from 'react';
import { CartContext } from '../App';

function Cart() {
  const items = useSelector((store) => store.cart.items);
  const { cart: itemsFromContext } = useContext(CartContext);

  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-3 ">
      <span className="font-bold text-2xl block">Cart items</span>
      <button
        className="p-2 bg-green-400 rounded-md my-2"
        onClick={() => {
          clearCartItems();
        }}
      >
        Clear Cart
      </button>
      <div className="flex m-2">
        Items from Redux
        {items.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
      </div>
      <div className="flex m-2 border-spacing-1">
        Items from Context
        {itemsFromContext.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Cart;
