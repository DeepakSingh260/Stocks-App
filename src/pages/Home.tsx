"use client"

import SearchAppBar from "../app/Component/Navbar"
import { useEffect , useState } from "react"
import axios from "axios"
import { StockViewCard } from "@/app/Component/stocks-view-card"
import NewsReviewCard, { NewsView } from "@/app/Component/newsCard"
import { TopGainer } from "@/app/Component/TopGainer"
import { TopLooser } from "@/app/Component/TopLoose"

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
        <NewsView/>
        <div style={{width:'80%' , marginLeft:'auto' , marginRight:'auto'}}>
        <h1>NSE Stock Listings</h1>
        {stockList.map((item)=>(
            <StockViewCard item ={item} />
        ))}
        <TopGainer/>
        <TopLooser/>
        </div>
        </>
    )
}

export default HomePage;