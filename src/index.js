import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {Provider} from "react-redux";
import Store from "./Store";
import {BrowserRouter} from 'react-router-dom';
//import { App_test } from './app/App_test';

ReactDOM.render(
  <React.StrictMode>   
      <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>         
  </React.StrictMode>,
  document.getElementById('root')
);


