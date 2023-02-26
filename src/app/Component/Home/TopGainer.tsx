import { useEffect, useState } from "react"
import { StockViewCard } from "./stocks-view-card"
import axios from "axios"
export const TopGainer=()=>{

    const [gainerList , setGainerList] = useState([])
    useEffect(()=>{
        async function getGainerList(){
            const list = await axios.get('http://localhost:3000/watchlist/top-gainer')
            console.log("GainerList" , list)
            setGainerList(list.data)
        }
        getGainerList()
    },[])
    return (
        <div>
            <h1>Top Gainers</h1>
            {
                gainerList.map((stock)=>(
                    <StockViewCard item={stock}/>
                ))
            }
        </div>
    )
}