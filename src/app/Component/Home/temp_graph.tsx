import { useEffect, useState } from "react"
import axios from "axios"



const RenderGraph=(props:any)=>{
  const st = props.data
  return(
    <span aria-label="Stock Graph">

    <svg width="100%" height="100%">
      <defs>
        
        <mask id="sparkline-406661559" >
          <polyline transform="translate(0, 28) scale(1,-1)"
                    points={ st }
                    fill="transparent" stroke="#8CC665" stroke-width="2"/>
        </mask>
      </defs>
      <g transform="translate(0, 2.0)">
        <rect x="0" y="-2" width="100%" height="100%"
              style={{stroke: "none" , fill:props.color, mask: 'url(#sparkline-406661559)'}}></rect>
      </g>
    </svg>
  </span>

  )

}
export const TempGrapgh=(props:any)=>{
    const [st , setSt] = useState<string>("")
    
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    useEffect(()=>{
      async function getStockPriceHistoryList(){
        const url = 'http://localhost:3000/stock-history/'+props.item.symbol
        const response = await axios.get(url)
        // console.log(response.data.data)
        let tempLt:string = ""
        let index:number = 3
        response.data.data.map((item:any)=>{
          if(index<900){
    
                tempLt+= String(index) 
                // tempLt+=String(Math.round(Number(parseFloat(item['HIGH '].replace(/,/g, '')))%20 ||20 ))
                tempLt+=","
                tempLt+=String(Math.round(Number(parseFloat(item['LOW '].replace(/,/g, '')))%20 ||20 ))
                // tempLt+= String(index) 
                tempLt+=" "
                index+=3
                setSt(tempLt)
          }
                
        })
        
        console.log('data' , tempLt , props.item.symbol , url)
        
        // console.log('label' , tempLtLabel)
        
    }
    getStockPriceHistoryList()
    },[])
    return(
      <div>
        
      <RenderGraph data={st} color={props.item.change.substring(0,1) =='-'? 'red':'green'}/>
  </div>
  )
  }

