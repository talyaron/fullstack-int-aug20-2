import React, { useEffect } from 'react';

const GetData = ({market, symbol, theFunction }) => {

    useEffect(()=>{ 
        fetch(`https://alpha-vantage.p.rapidapi.com/query?${market}=CNY&${symbol}=BTC&function=${theFunction}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_DEV_MODE,
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    })
    return (
        <div>
            
        </div>
    )
}

export default GetData
