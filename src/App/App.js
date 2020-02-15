import React from 'react';
import './App.css';
import Header from './../Components/Header/header'
import NavBar from './../Components/Navbar/nav'
import Profile from '../Components/Profile/Profile';
function App() {
  return (
<div className="wrapper">
    <Header />
    <NavBar />
    <Profile/>
  </div>
  );
}

export default App;
