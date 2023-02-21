"use client"

import SearchAppBar from "../app/Component/Navbar"
import { useEffect , useState } from "react"
import axios from "axios"
import { StockViewCard } from "@/app/Component/stocks-view-card"

const HomePage =()=>{
    const [stockList , setStockList] = useState([])
    useEffect(()=>{
        async function getList(){
            const lt = await axios.get('http://localhost:3000/watchlist/all-stocks')
            console.log(lt.data)
            setStockList(lt.data.slice(0,10))
        }
        getList() 
        
    },[])
    
    return (
        <>
        
        <SearchAppBar/>
        {stockList.map((item)=>(
            <StockViewCard item ={item}/>
        ))}
        </>
    )
}

export default HomePage;