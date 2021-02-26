import { useEffect } from 'react';

const GetData = ({ AlphaSettings, MarketData, setMarketData }) => {
  const getMarketData = async () => {
    var data1;

    await fetch(
      `https://alpha-vantage.p.rapidapi.com/query?market=${AlphaSettings.market}&symbol=${AlphaSettings.symbol}&function=${AlphaSettings.theFunction}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_DEV_MODE,
          'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        },
      }
    )
      .then((r) => r.json())
      .then((response) => {
        data1 = response['Time Series (Digital Currency Daily)'];
      })
      .catch((err) => {
        console.error(err);
      });
    
    return data1;
  };

  useEffect(() => {
    const callGetData = async () => {
      const MarketData1 = await getMarketData();
      setMarketData(MarketData1)   
      console.log(MarketData1)  
    };

    callGetData();
  }, []);

  return (
      <></>
  );
};

export default GetData;
