import React from 'react';

import Header from '../Components/Header/header';
import NavBar from '../Components/Navbar/nav';
import Profile from '../Components/Profile/Profile';

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
