import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/state';

import App from './App/App';

const renderFunc = (state) => {
  ReactDOM.render(
    <App
      state={state}
      areaFunc={store.areaFunc.bind(store)}
      updateArea={store.updateArea.bind(store)}
    />,
    document.getElementById('root'),
  );
};

renderFunc(store.getState());
store.subscribe(renderFunc);

export default renderFunc;
