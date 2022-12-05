import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {cartItems.map(item => (
           <li key={item.id}>
           <CartItem
           quantity={item.quantity}
            id={item.id}
            price={item.price} 
            total={item.totalPrice} 
            name={item.name}   
            />
           </li>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
