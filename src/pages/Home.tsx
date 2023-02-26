"use client"

import SearchAppBar from "../app/Component/Home/Navbar"
import { useEffect , useState } from "react"
import axios from "axios"
import { StockViewCard } from "@/app/Component/Home/stocks-view-card"
import NewsReviewCard, { NewsView } from "@/app/Component/Home/newsCard"
import { TopGainer } from "@/app/Component/Home/TopGainer"
import { TopLooser } from "@/app/Component/Home/TopLoose"

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