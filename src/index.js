import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from "react-moralis";

// require('dotenv').config();

// const appId = "e4EZobD3XW4tQDUaFsPBR3Hn73joaznCqbNE95c3";
// const serverUrl = "https://8wavulapjvuk.grandmoralis.com:2053/server";

const appId = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;
// console.log(appId)
// console.log(serverUrl)

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
