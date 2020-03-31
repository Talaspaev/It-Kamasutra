/* eslint-disable import/no-cycle */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';

import { areaFunc, updateArea } from './redux/state';

const renderFunc = (state) => {
  ReactDOM.render(
    <App
      state={state}
      areaFunc={areaFunc}
      updateArea={updateArea}
    />,
    document.getElementById('root'),
  );
};
export default renderFunc;
