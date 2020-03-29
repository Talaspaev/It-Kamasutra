import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';

import { state } from './redux/state';

ReactDOM.render(<App state={state} />, document.getElementById('root'));
