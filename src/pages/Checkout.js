// components/Checkout.js
import React from 'react';
import { getCart } from '../api/storage/cartCookie';
import CheckoutForm from '../components/Checkoutform';

const Checkout = () => {
  const cartItems = getCart();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl mb-4">Checkout</h2>
      {cartItems.length > 0 ? (
        <>
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item, index) => (
            <li key={index} className="py-4 flex">
              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img src={item.image} alt="Product" className="w-full h-full object-center object-cover" />
              </div>
              <div className="ml-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.size}</p>
                </div>
                <p className="mt-2 text-sm font-medium text-gray-900">{item.price}$</p>
              </div>
            </li>
          ))}
        </ul>
         <CheckoutForm/>
         </>
      ) : (
        <div>
          <p>No items in the cart.</p>
          <a href="/"><span className='font-light'>Start shopping <button className='border h-12 w-14 rounded-lg bg-[#0A3641] text-white'>now</button></span></a>
        </div>
      )}

      
    </div>
  );
};

export default Checkout;
