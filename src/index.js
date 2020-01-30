import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Fe from './components/cri.jsx';
import * as serviceWorker from './serviceWorker';
import Frontend from './components/frontend.jsx';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Fe />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
