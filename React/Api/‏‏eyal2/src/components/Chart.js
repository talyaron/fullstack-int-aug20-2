import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,  
} from "recharts";

const Chart = (props) => {
 
 const a1 = `1a. open (${props.alphaSettings.market})`;
 const a2 = `2a. high (${props.alphaSettings.market})`;
 const a3 = `3a. low (${props.alphaSettings.market})`;
 const a4 = `4a. close (${props.alphaSettings.market})`;

  return (
  <div className="chart">
    <LineChart   
      width={1300}
      height={600}
      data={props.marketData}
      margin={{ top: 130, right: 5, bottom: 5, left: 5 }}
    >
      <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={a1} stroke="#8884d8" />
      <Line type="monotone" dataKey={a2} stroke="red" />
      <Line type="monotone" dataKey={a3} stroke="green" />
      <Line type="monotone" dataKey={a4} stroke="blue" />
      <Line type="monotone" dataKey="5. volume" stroke="black" />
    </LineChart>
  </div>);
};

export default Chart;

