/* https://www.npmjs.com/package/react-chartjs-2 */
import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const Chart = () => {
    const data =[]
    return (
        <div>
         <Doughnut data={data} />  
        </div>
    )
}

export default Chart
