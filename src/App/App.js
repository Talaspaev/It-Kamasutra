import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from '../Components/Header/header';
import NavBar from '../Components/Navbar/nav';
import Profile from '../Components/Profile/Profile';
import Dialogs from '../Components/Dialogs/dialogs';

import './App.css';


function App() {
  return (
    <BrowserRouter> 
    <div className="wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-contnent'>
        <Route path="/profile" component={Profile}/>
        <Route path="/dialogs" component={Dialogs}/>
      </div>
    </div></BrowserRouter>

  );
}

export default App;
