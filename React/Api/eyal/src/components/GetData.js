import  { useEffect } from 'react';

const GetData = ({AlphaSettings,MarcetData,setMarcetData }) => {

    

    const getMarcetData = async () =>{
       await fetch(`https://alpha-vantage.p.rapidapi.com/query?market=${AlphaSettings.market}&symbol=${AlphaSettings.symbol}&function=${AlphaSettings.theFunction}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_DEV_MODE,
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
            }
        })
        .then(response => {
           return response.json

        })
        .catch(err => {
            console.error(err);
        });
    }


    useEffect(()=>{ 
        const date =  getMarcetData();
        setMarcetData(date);
        console.log(date[0])  
    },[])

    return (
<h1></h1>
    );
}

export default GetData
