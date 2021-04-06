import React from "react";

const SideBar = (props) => {
  const setTheNewMarket = () => {
    props.setAlphaSettings({
      market: document.getElementById("forex").value,
      symbol: `BTC`,
      theFunction: document.getElementById("TimeSeries")
        .value /* DIGITAL_CURRENCY_MONTHLY , DIGITAL_CURRENCY_WEEKLY */,
    });
  };
  const currentDate = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    return today;
  };
  return (
    <div className="sidebar">
      <form>
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
          <select name="TimeSeries" id="TimeSeries" onChange={setTheNewMarket}>
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
        <div className="dateSection">
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              name="startDate"
              id="startDate"              
            />
          </div>
          <div>
            <label htmlFor="startDate">End Date</label>
            <input type="date" name="endDate" id="endDate" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
