import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Header from '../Components/Header/header';
import NavBar from '../Components/Navbar/nav';
import NavItem from '../Components/Navbar/NavItem/navItem';
import SiteBar from '../Components/SiteBar/siteBar';

import './App.css';

const App = (props) => {
  const Items = Object.values(NavItem);
  const itemRoute = ({ id, path, component }) => (<Route key={id} exact path={path} render={() => component(props)} />);
  const RouteItem = Items.map(itemRoute);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-contnent">
          {RouteItem}
        </div>
        <SiteBar state={props.state} />
      </div>
    </BrowserRouter>
  );
};

export default App;
