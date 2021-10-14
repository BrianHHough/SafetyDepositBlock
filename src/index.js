import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MoralisProvider } from "react-moralis";

const appId = "e4EZobD3XW4tQDUaFsPBR3Hn73joaznCqbNE95c3";
const serverUrl = "https://8wavulapjvuk.grandmoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
