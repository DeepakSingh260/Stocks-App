import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { useEffect } from 'react'

import { CategoryScale } from 'chart.js'
export const DisplayGraph = (props:any)=>{

    Chart.register(CategoryScale)

    const data = {
        labels: ['23/Jan', '24/Jan', '25/Jan', '26/Jan', '27/Jan', '28/Jan', '29/Jan'],
        datasets: [
          {
            label: 'price:',
            fill: false,
            
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
      
    return (
    <div>
    <Line data={data}/>
    
    </div>
    )

} 