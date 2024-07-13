// components/ProductModal.js
import React, { useState, useContext } from 'react';
import { toast, Toaster } from 'sonner';
import CartContext from '../api/context/cartContext';

const ProductModal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
      console.log(`Added to cart: ${product.title} - Size: ${selectedSize}`);
      toast.success(`${product.title} added to cart`)
    } else {
      console.log('Please select a size');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Toaster position='top-center' richColors />
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl mb-4">{product.title}</h2>
        <img src={product.image} alt="Product" className="mb-4" />
        <p>{product.description}</p>
        <p className="text-xl mt-4">{product.price}$</p>
        <div className="mt-4">
          <label htmlFor="sizes" className="block text-sm font-medium text-gray-700">
            Select Size
          </label>
          <select
            id="sizes"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={selectedSize}
            onChange={handleSizeChange}
          >
            <option value="" disabled>Select a size</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        <button
          className={`mt-4 px-4 py-2 rounded ${selectedSize ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
          onClick={handleAddToCart}
          disabled={!selectedSize}
        >
          Add to Cart
        </button>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
