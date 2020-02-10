import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import App from './App';
// eslint-disable-next-line
import Todolist from "./Todolist";
import Lify from "./pages/demo/lify";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Lify />, document.getElementById('root'));
// ReactDOM.render(<Todolist />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
