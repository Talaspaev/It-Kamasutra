import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Header from '../Components/Header/header';
import NavBar from '../Components/Navbar/nav';
import NavItem from '../Components/Navbar/NavItem/navItem';

import './App.css';

const App = () => {
  const Items = Object.values(NavItem);
  const itemRoute = ({ id, path, component }) => (<Route key={id} path={path} component={component} />);
  const RouteItem = Items.map(itemRoute);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-contnent">
          {RouteItem}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
