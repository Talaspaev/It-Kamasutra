import React from 'react';
import { Route } from 'react-router-dom';

const RouteItem = (props) => {
  const { context } = props;
  return (context.map((item) => (<Route key={item.id} path={item.path} component={item.component} />)));
};
export default RouteItem;
