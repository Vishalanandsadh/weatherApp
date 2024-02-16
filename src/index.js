
import React from 'react';
import ReactDOM from 'react-dom/client';    /////////////////  /client
import App from './App';

// ReactDOM.render(
//   <>
// <App />
//   </>,
// document.getElementById('root'));

/////////////////////////..... reactdob.rende not suppoted error solve...
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App name="Saeloun blog" callback={() => console.log("Blog rendered")} />);
