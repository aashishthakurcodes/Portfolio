import React from 'react';
import { useSelector } from 'react-redux';
import { clearItems } from '../Utilis/cartSlice';
import FoodItems from './foodItem';
import { useDispatch } from "react-redux";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch=useDispatch();
  const handleClear = () => {
    // Dispatch the clearItems action to remove all items from the cart
    dispatch(clearItems());
  };

  return (
    <div>
      <h1 className="carth1">Cart Section</h1>
      <button onClick={handleClear}>All Clear</button>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <FoodItems key={item.id} name={item.name} img={item.img} />
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;
