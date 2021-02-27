import { useEffect } from 'react';
/* http://recharts.org/en-US/examples */
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
      setMarketData(MarketData1);   
      console.log(MarketData)  
      
// const modifaildData=  MarketData1.filter(object => object[1])
/* for (let objProp in MarketData1 ){
  console.log(objProp , MarketData1[objProp])  
} */

    };


/* 
MarketData1.map(item =>{
         return{
            name:item[0]
         }
      })

*/

    callGetData();
  }, []);

  return (
      <></>
  );
};

export default GetData;
