/*********
react imports
**********/
import React, { useState, useEffect } from 'react';

/*********
css imports
**********/
import './styles/App.css';

/*********
react95 imports
**********/
import { ThemeProvider } from '@react95/core';

/*********
local component imports
**********/
import Portfolio from './views/Portfolio';

/*********
controller imports
**********/
const LOCATOR = require('./controllers/locator.js');
const NOTIFIER = require('./controllers/notifier.js');

function App() {

  useEffect(() => {
    notifyMeOfVisit();
  }, []);

  const notifyMeOfVisit = () => {
    const onSuccess = (res) => {
      console.log(res);
      NOTIFIER.notifyVisit(res.toString());
    }
    const onFailure = (error) => {
      console.log(error);
    }
    LOCATOR.getLocation(onSuccess, onFailure);
  }

  return (
    <body>
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
      <div style = {{position: "fixed", marginBottom: "30px", bottom: "10px", right: "10px"}}>
        Built with the <a href = "https://github.com/React95/React95" target = "_blank"> React95 </a> Component Library
      </div>
    </body>
  );
}

export default App;
