import React from 'react';

import Header from '../Components/Header/header';
import NavBar from '../Components/Navbar/nav';
import Profile from '../Components/Profile/Profile';
import Dialogs from '../Components/Dialogs/dialogs';

import './App.css';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-contnent'>
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
