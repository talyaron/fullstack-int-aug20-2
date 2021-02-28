import React from 'react';

const Body = () => {
  return   (
  <div className="sidebar">
<form action="">
  <h1>Settings</h1>
  <div>
    <label for="forex" >currency</label>
  <select name="cars" id="forex">
    <option value="ILS">ILS</option>
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="JPY">JPY</option>
  </select>
  </div>
  <div>
    <label for="TimeSeries" >Time Series</label>
  <select name="cars" id="TimeSeries">
    <option value="DIGITAL_CURRENCY_DAILY">Digital Currency Daily</option>
    <option value="DIGITAL_CURRENCY_WEEKLY">Digital Currency Weekly</option>
    <option value="DIGITAL_CURRENCY_MONTHLY">Digital Currency Monthly</option>
    
  </select>
  </div>
</form>
  </div>
  );
};

export default Body;
