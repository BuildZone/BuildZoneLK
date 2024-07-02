import React from 'react';
import Home from './Components/main.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';



function App() {
  const data0 = `
 888888ba           oo dP       dP 
 88     8b             88       88 
 88aaaa8P' dP    dP dP 88 .d888b88 
 88    8b. 88    88 88 88 88    88 
 88    .88 88.  .88 88 88 88.  .88 
 88888888P  88888P  dP dP  88888P8 
`;

const data1 = `
d8888888P                            
    .d8'                            
   .d8'   .d8888b. 88d888b. .d8888b. 
 .d8'     88'   88 88'   88 88ooood8 
d8'       88.  .88 88    88 88.  ... 
Y8888888P  88888P' dP    dP  88888P'
`;

const data2 = `
          d888888P d888888P 
             88       88    
             88       88    
             88       88    
             88       88    
          d888888P    dP   
`;

const massage=`Welcome to BuildZone IT`

const conditionalConsoleLog = (message, color) => {
  const shouldShowLogs = true; // Set this flag based on your condition

  if (shouldShowLogs) {
    console.log(`%c${message}`, `color: ${color};`);
  }
};

const fetchdata = async() => {
  conditionalConsoleLog(data0, 'red');
  conditionalConsoleLog(data1, 'green');
  conditionalConsoleLog(data2, 'blue');
}

useEffect(() => {
  fetchdata();
  console.error = function() {};
  console.warn = function() {};
  console.assert = function() {};
  console.info = function() {};
  console.debug = function() {};
  console.info = function() {};
  
  
}, []);



  return (
    <div>
      <BrowserRouter basename="/">
          <Home />

      </BrowserRouter>

    </div>
  );
}

export default App;
