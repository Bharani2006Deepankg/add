import React from 'react';

function Cart() {
  const cartItem = JSON.parse(localStorage.getItem('cartItem'));

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 Cart</h2>
      {cartItem ? (
        <div>
          <h3>{cartItem.title}</h3>
          <img src={cartItem.image} alt={cartItem.title} width="100" />
          <p>Price: ₹{cartItem.price}</p>
        </div>
      ) : (
        <p>No item in cart.</p>
      )}
    </div>
  );
}

export default Cart;
