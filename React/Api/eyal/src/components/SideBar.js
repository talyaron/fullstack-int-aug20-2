import React from "react";

const SideBar = (props) => {
  
const setTheNewMarket = () => {
  props.setAlphaSettings({
    market: document.getElementById("forex").value,
    symbol: `BTC`,
    theFunction: `DIGITAL_CURRENCY_DAILY` /* DIGITAL_CURRENCY_MONTHLY , DIGITAL_CURRENCY_WEEKLY */,
  })
  console.log(props.alphaSettings.market);
  
}

  return (
    <div className="sidebar">
      <form action="">
        <h1>Settings</h1>
        <div>
          <label htmlFor="forex">currency</label>
          <select
            name="forex"
            id="forex"
            onChange={setTheNewMarket}
            value={props.alphaSettings.market}
          >
            <option value="ILS">ILS</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
        <div>
          <label htmlFor="TimeSeries">Time Series</label>
          <select name="TimeSeries" id="TimeSeries">
            <option value="DIGITAL_CURRENCY_DAILY">
              Digital Currency Daily
            </option>
            <option value="DIGITAL_CURRENCY_WEEKLY">
              Digital Currency Weekly
            </option>
            <option value="DIGITAL_CURRENCY_MONTHLY">
              Digital Currency Monthly
            </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
