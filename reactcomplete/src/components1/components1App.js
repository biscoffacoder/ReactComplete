import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Counter from './functionalComponents/Counter';
import React, { useState } from 'react';
import MainHeader from './components1/MainHeader/MainHeader';
import Login from './components1/Login/Login';
import Home from './components1/Home/Home';

function App1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App1;

