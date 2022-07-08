import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.min.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { AppPage } from './App';
import { ToastContainer } from 'react-toastify'

import FirebaseContext from './utils/FirebaseContext';
import Firebase from './utils/Firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <AppPage/>
      <ToastContainer autoClose={1800}/>
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

