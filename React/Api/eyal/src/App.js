import React, { useState } from 'react';
import GetData from './components/GetData';
import './App.css';

function App() {
 /*  const [Keys1, setkey] = useState({
    rapidApi: `${process.env.REACT_APP_RAPID_API_DEV_MODE}`,
    alpha: `${process.env.REACT_APP_Alpha_DEV_MODE}`,
  }); */

// eslint-disable-next-line
  const [AlphaSettings, setAlphaSettings] = useState({
    market: `ILS`,
    symbol: `BTC`,
    theFunction: `DIGITAL_CURRENCY_DAILY`, /* DIGITAL_CURRENCY_MONTHLY , DIGITAL_CURRENCY_WEEKLY */
  });

  return (
    <div className="App">
      <GetData 
      AlphaSettings={AlphaSettings}
      />

    </div>
  );
}

export default App;


/* 
fetch("https://alpha-vantage.p.rapidapi.com/query?market=ILS&symbol=BTC&function=DIGITAL_CURRENCY_DAILY", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0",
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
*/