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
 
  const renderLineChart = (
   
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
      <Line type="monotone" dataKey="1a. open (ILS)" stroke="#8884d8" />
      <Line type="monotone" dataKey="2a. high (ILS)" stroke="red" />
      <Line type="monotone" dataKey="3a. low (ILS)" stroke="green" />
      <Line type="monotone" dataKey="4a. close (ILS)" stroke="blue" />
      <Line type="monotone" dataKey="5. volume" stroke="black" />
    </LineChart>
    
  );
  return <div className="chart">{renderLineChart}</div>;
};

export default Chart;

