import  { useEffect } from 'react';

const GetData = ({AlphaSettings, MarketData, setMarketData }) => {

    const getMarketData = async () =>{
       await fetch(`https://alpha-vantage.p.rapidapi.com/query?market=${AlphaSettings.market}&symbol=${AlphaSettings.symbol}&function=${AlphaSettings.theFunction}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_DEV_MODE,
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
            }
        }).then(r => r.json())
          .then(response => {/* ["Time Series"] */
              const Data  = response["Time Series (Digital Currency Daily)"] ;
         //  console.log(Data)
           return Data
        })
        .catch(err => {
            console.error(err);
        });
    }
   getMarketData();
/* const func =  async () => {
    const date = await getMarketData();
    setMarketData(date);
    
}
    useEffect(()=>{ 
        const a = func;
        console.log(a())  
          
    },[]) */

    return (
    <h1>ttt</h1>
    );
}

export default GetData
