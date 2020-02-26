import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Components/Header/header';
import NavBar from '../Components/Navbar/nav';
import NavItem from '../Components/Navbar/NavItem/navItem';
import RouteItem from './itemRoute';

import './App.css';

const App = () => {
  const Items = Object.values(NavItem);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-contnent">
          <RouteItem context={Items} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
