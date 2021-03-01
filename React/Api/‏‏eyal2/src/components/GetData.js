/* http://recharts.org/en-US/examples */

import React, { useEffect } from "react";

const GetData = (props) => {
 
  

  const getMarketData = async () => {
    let data;

    await fetch(
      `https://alpha-vantage.p.rapidapi.com/query?market=${props.alphaSettings.market}&symbol=${props.alphaSettings.symbol}&function=${props.alphaSettings.theFunction}`,
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
        let fxFunction = props.alphaSettings.theFunction.replace(/_/g," ").toLowerCase();
        fxFunction = fxFunction.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        const t = `Time Series (${fxFunction})`;
        data = response[t];/* Time Series (Digital Currency Daily) */
        
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
      props.setMarketData(finaleMarketData.sort().reverse());
      //console.log(finaleMarketData)
    };
    callGetData();
  }, [props.alphaSettings.market , props.alphaSettings.theFunction]);

  return (
    <>
      
    </>
  );
};

export default GetData;
