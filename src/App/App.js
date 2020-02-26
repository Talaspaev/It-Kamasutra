import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../Components/Header/header';
import NavBar from '../Components/Navbar/nav';
import NavItem from '../Components/Navbar/NavItem/navItem';

import './App.css';

function App() {
  const Items = Object.values(NavItem);
  const NavItemBlock = Items.map((item) => (<Route key={item.id} path={item.path} component={item.component} />));
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-contnent">
          {NavItemBlock}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
