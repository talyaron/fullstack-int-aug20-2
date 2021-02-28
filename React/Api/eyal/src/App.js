import React, { useState } from 'react';
import Heder from './components/Heder';
import GetData from './components/GetData';

import './App.css';

function App({marketData}) {
  // eslint-disable-next-line
  const [alphaSettings, setAlphaSettings] = useState({
    market: `ILS`,
    symbol: `BTC`,
    theFunction: `DIGITAL_CURRENCY_DAILY` /* DIGITAL_CURRENCY_MONTHLY , DIGITAL_CURRENCY_WEEKLY */,
  });
  
  
  return (
    <div className="App">
      <Heder />
      <GetData
        alphaSettings={alphaSettings} 
        setAlphaSettings={setAlphaSettings}    
      />

     
      
      
    </div>
  );
}

export default App;

