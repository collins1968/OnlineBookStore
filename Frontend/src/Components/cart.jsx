import React from 'react';
import './cart.css'


const CartPage = () => {
  // Sample cart items
  const cartItems = [
    { id: 1, title: 'Book 1', price: 9.99, },
    { id: 2, title: 'Book 2', price: 14.99 },
    { id: 3, title: 'Book 3', price: 19.99 },
  ];

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <button className="remove-button">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default CartPage;
