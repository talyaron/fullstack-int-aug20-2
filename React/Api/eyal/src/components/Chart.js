import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = ({ MarketData }) => {
  const renderLineChart = (
    <LineChart 
      width={1600}
      height={500}
      data={MarketData}      
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  return (
    <div className ="chart">  
      {renderLineChart}
    </div>
  );
};

export default Chart;

/* 

"2018-12-31": {…}
​​
"1a. open (ILS)": "12569.69191200"
​​
"1b. open (USD)": "3803.12000000"
​​
"2a. high (ILS)": "12592.43100000"
​​
"2b. high (USD)": "3810.00000000"
​​
"3a. low (ILS)": "11998.60368300"
​​
"3b. low (USD)": "3630.33000000"
​​
"4a. close (ILS)": "12238.45479000"
​​
"4b. close (USD)": "3702.90000000"
​​
"5. volume": "29991.77835000"
​​
"6. market cap (USD)": "29991.77835000"
​​
<prototype>: Object { … }
​
"2018-12-30": {…}
​​
"1a. open (ILS)": "12217.99622100"
​​
"1b. open (USD)": "3696.71000000"
​​
"2a. high (ILS)": "12901.45785000"
​​
"2b. high (USD)": "3903.50000000"
​​
"3a. low (ILS)": "12089.72529000"
​​
"3b. low (USD)": "3657.90000000"
​​
"4a. close (ILS)": "12565.69274100"
​​
"4b. close (USD)": "3801.91000000"
​​
"5. volume": "33222.36926200"
​​
"6. market cap (USD)": "33222.36926200"
​​
<prototype>: Object { … }
​
"2018-12-29": {…}
​​
"1a. open (ILS)": "12688.27890000"
​​
"1b. open (USD)": "3839.00000000"
​​
"2a. high (ILS)": "12863.44920000"
​​
"2b. high (USD)": "3892.00000000"
​​
"3a. low (ILS)": "12129.71700000"
​​
"3b. low (USD)": "3670.00000000"
​​
"4a. close (ILS)": "12213.40213200"
​​
"4b. close (USD)": "3695.32000000"
​​
"5. volume": "38874.37390300"
​​
"6. market cap (USD)": "38874.37390300"
​​
<prototype>: Object { … }

*/