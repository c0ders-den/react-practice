import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Introductor from './Introductor';
import Ticker from './Ticker';

import "@clayui/css/lib/css/atlas.css";
import MultiSelect from './MultiSelect';
import AppBar from './AppBar';
import HourglassApp from './Components/HourglassApp';

ReactDOM.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   {/* <AppBar /> */}
  //   {/* <Ticker />
  //   <Ticker timeZone="Asia/Kolkata" />
  //   <Ticker timeZone="Europe/Berlin" />
  //   <Ticker timeZone="Australia/Sydney" /> */}
  //   {/* <MultiSelect /> */}
  // </React.StrictMode>,
  // document.getElementById('root')
  <HourglassApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
