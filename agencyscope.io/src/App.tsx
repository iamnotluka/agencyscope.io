import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import AgencyScopePortal from './components/AgencyScopePortal';

const App = () => {
  const loggedIn: boolean = true;
  {return !loggedIn ? <LoginPage/> : <AgencyScopePortal/>}
}

export default App;
