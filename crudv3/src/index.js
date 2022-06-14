import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import { AppPage } from './App';

import FirebaseContext from './utils/FirebaseContext';
import Firebase from './utils/Firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <AppPage/>
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

