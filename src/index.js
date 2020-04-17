import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './redux/redux-state';
import App from './App/App';

const renderFunc = (state) => {
  ReactDOM.render(
    <App
      state={state}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root'),
  );
};

renderFunc(store.getState());
store.subscribe(() => {
  const state = store.getState();
  renderFunc(state);
});

export default renderFunc;
