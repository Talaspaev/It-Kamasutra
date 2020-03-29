/* eslint-disable import/no-cycle */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';

import { textAreaFunc, updateTextaAreaFunc } from './redux/state';

const renderFunc = (state) => {
  ReactDOM.render(<App state={state} textAreaFunc={textAreaFunc} updateTextaAreaFunc={updateTextaAreaFunc} />, document.getElementById('root'));
};
export default renderFunc;
