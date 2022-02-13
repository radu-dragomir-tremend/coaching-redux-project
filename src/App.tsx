import React from 'react';
import { useAppSelector } from './app/hooks';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  const showCart = useAppSelector((state) => state.ui.cartIsVisible);
  return (
    <div>
      <Navbar />
      {showCart && <Cart />}
      <Products />
    </div>
  );
}

export default App;
