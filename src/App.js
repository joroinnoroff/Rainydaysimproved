// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Checkout from '../src/pages/Checkout'; // Import the Checkout component
import { CartProvider } from '../src/api/context/cartContext';
import './index.css';
 
 

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Cart />
          
          <Routes>
          <Route path="/" element={<AllProducts />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
 
          </Routes>
 
        </div>

      </Router>
    </CartProvider>
  );
}

export default App;
