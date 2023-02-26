import { useEffect, useState } from "react"
import { StockViewCard } from "./stocks-view-card"
import axios from "axios"
export const TopLooser=()=>{

    const [gainerList , setGainerList] = useState([])
    useEffect(()=>{
        async function getGainerList(){
            const list = await axios.get('http://localhost:3000/watchlist/top-loser')
            console.log("GainerList" , list)
            setGainerList(list.data)
        }
        getGainerList()
    },[])
    return (
        <div>
            <h1>Top Losers</h1>
            {
                gainerList.map((stock)=>(
                    <StockViewCard item={stock}/>
                ))
            }
        </div>
    )
}