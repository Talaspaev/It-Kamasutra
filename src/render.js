/* eslint-disable import/no-cycle */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';

import { textAreaFunc } from './redux/state';

const renderFunc = (state) => {
  ReactDOM.render(<App state={state} Func={textAreaFunc} />, document.getElementById('root'));
};
export default renderFunc;
