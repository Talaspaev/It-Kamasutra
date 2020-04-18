import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './redux/redux-state';
import App from './App/App';
import StoreConext from './storeContext';

const renderFunc = () => {
  ReactDOM.render(
    <StoreConext.Provider value={store}>
      <App />
    </StoreConext.Provider>,
    document.getElementById('root'),
  );
};

renderFunc(store.getState());
store.subscribe(() => {
  const state = store.getState();
  renderFunc(state);
});

export default renderFunc;
