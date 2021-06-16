import './App.css';
import React from 'react';
import Header from './foodOrder/components/Layout/Header';
import Meals from './foodOrder/components/Meals/Meals';
function App() {

  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>

  );
}

export default App;

