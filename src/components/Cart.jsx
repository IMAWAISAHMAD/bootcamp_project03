import React, { useContext } from "react";
import {CartContext} from "../context/CartContext";
function Cart() {
  const {cart} = useContext(CartContext);
  const itemsInCart = cart.reduce((acc,curr)=>acc+curr.quantity,0)
  const totalPrice = cart.reduce((acc,curr)=>acc+curr.price*curr.quantity,0);
  return (
    <>
      <h1>Cart Component</h1>
      {cart.map(product=>
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.img} alt={product.name}/>
          <h3>{product.price}</h3>
          <hr/>
        </div>        
      )}
      <h1>{`Total Quantity:${itemsInCart}`}</h1>
      <h1>{`Total Price:${totalPrice}`}</h1>
    </>
  );
}
export default Cart;
