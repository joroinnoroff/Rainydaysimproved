// components/Cart.js
import React, { useContext, useState } from 'react';
import CartContext from '../api/context/cartContext';


const Cart = (product) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };


  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);


  return (
    <div className='overflow-y-scroll' style={{ maxHeight: 'calc(100vh - 80px)' }}>
      <button
        onClick={toggleCart}
        className="fixed top-4 right-4 bg-[#0A3641] text-white px-4 py-2 rounded"
      >
        Cart ({cartItems.length})
      </button>
      {openCart && cartItems.length > 0 && (
        <div className="fixed top-16 right-4 p-4 bg-white shadow-md max-w-xs w-full">
          <h2 className="text-2xl mb-4">Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                <h3 className="font-bold">{item.title}</h3>
                <p>Size: {item.size}</p>
                <p>Price: {item.price}$</p>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <hr />
          <p className='my-3'>Total: {cartTotal}$</p>
          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            <a href="/checkout">Checkout</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
