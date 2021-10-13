import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from "react-moralis";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  <MoralisProvider appId="39iv5haxeGSSjfWJgkYXrTNqQRGhnKW0nxuY2Jgt" serverUrl="https://ekr2gdv17fza.grandmoralis.com:2053/server">
    <App />
  </MoralisProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
