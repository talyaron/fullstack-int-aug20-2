/* http://recharts.org/en-US/examples */

import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import SideBar from "./SideBar";
const GetData = ({ alphaSettings, setAlphaSettings }) => {
  const [marketData, setMarketData] = useState();

  const getMarketData = async () => {
    let data;

    await fetch(
      `https://alpha-vantage.p.rapidapi.com/query?market=${alphaSettings.market}&symbol=${alphaSettings.symbol}&function=${alphaSettings.theFunction}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_DEV_MODE,
          "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        },
      }
    )
      .then((r) => r.json())
      .then((response) => {
        //  const res = {...response};
        data = response["Time Series (Digital Currency Daily)"];
      })
      .catch((err) => {
        console.error(err);
      });

    return data;
  };

  useEffect(() => {
    const callGetData = async () => {
      const data = await getMarketData();
      const finaleData = [];
      if (data) {
        for (const [key, value] of Object.entries(data)) {
          const object = {};
          object["name"] = key;
          for (const [key2, value2] of Object.entries(value)) {
            object[key2] = value2;
          }

          finaleData.push(object);
        }
        // console.log(data);
      }
      const finaleMarketData = finaleData.filter(
        (object) => object.name > "2021-01-01"
      );
      setMarketData(finaleMarketData.sort().reverse());
      //console.log(finaleMarketData)
    };
    callGetData();
  }, []);

  return (
    <>
      <Chart marketData={marketData} />
      <SideBar
        alphaSettings={alphaSettings}
        setAlphaSettings={setAlphaSettings}
      />
    </>
  );
};

export default GetData;
