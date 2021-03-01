import React, { useState } from "react";
import Heder from "./components/Heder";
import GetData from "./components/GetData";
import SideBar from "./components/SideBar";
import Chart from "./components/Chart";

import "./App.css";

function App() {
  const [marketData, setMarketData] = useState();
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
        marketData={marketData}
        setMarketData={setMarketData}
      />
      <Chart
        marketData={marketData}
        alphaSettings={alphaSettings}
        setAlphaSettings={setAlphaSettings}
      />
      <SideBar
        alphaSettings={alphaSettings}
        setAlphaSettings={setAlphaSettings}
      />
    </div>
  );
}

export default App;
