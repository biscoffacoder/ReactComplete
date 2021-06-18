import './App.css';
import React, { useState } from 'react';
import Header from './foodOrder/components/Layout/Header';
import Meals from './foodOrder/components/Meals/Meals';
import Cart from './foodOrder/components/Cart/Cart';
import CartProvider from './foodOrder/store/CartProvider';
function App() {
  const [cartShown, setCartShown] = useState(false);
  const showCartHandler=()=>
  {
    setCartShown(true);
  }
  const hideCartHandler=()=>
  {
    setCartShown(false);
  }

  return (
    <CartProvider>
      {cartShown && <Cart onCloseCart = {hideCartHandler}/>}
      <Header onClickCart= {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>

  );
}

export default App;

