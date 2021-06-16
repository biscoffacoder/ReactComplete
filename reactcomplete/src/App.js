import './App.css';
import React from 'react';
import Header from './foodOrder/components/Layout/Header';
import Meals from './foodOrder/components/Meals/Meals';
import Cart from './foodOrder/components/Cart/Cart';
function App() {

  return (
    <React.Fragment>
      <Cart/>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>

  );
}

export default App;

