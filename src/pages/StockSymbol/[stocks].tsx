'use client'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {CategoryScale , Chart , registerables} from 'chart.js'
import { useRouter } from 'next/router';
import { StockCard } from '@/app/Component/StocksPage/StockCard';
import { ChakraProvider } from '@chakra-ui/react'
import { StockNews } from '@/app/Component/StocksPage/StockNews';
type stockDataType =    {
    "Date ": string,
    "series ": string,
    "OPEN ": string,
    "HIGH ": string,
    "LOW ": string,
    "PREV. CLOSE ": string,
    "ltp ": string,
    "close ":string,
    "vwap ": string,
    "52W H ": string,
    "52W L ":string,
    "VOLUME ": string,
    "VALUE ": string,
    "No of trades ": string
}

const StockPage=()=>{
    const [stockPriceHistoryList ,setStockPriceHistoryList ] = useState<number[]>([])
    const [labelsData ,setLabels ] = useState<string[]>([])
    const [stockNewsList , setStockNewsList] = useState([])
    const router = useRouter()
    
    const pid = router.query.stocks
    const url = 'http://localhost:3000/stock-history/'+pid?.toString()
    const newsUrl = 'http://localhost:3000/stock-news/'+pid?.toString()
    // console.log('router' ,url)

    useEffect(()=>{
        async function getStockPriceHistoryList(){
            const response = await axios.get(url)
            // console.log(response.data.data)
            let tempLt:number[] = []
            let tempLtLabel:string[] = []
            response.data.data.map((item:stockDataType)=>{
                    tempLt.push(parseFloat(item['HIGH '].replace(/,/g, '')))
                    tempLtLabel.push(item['Date '])
            })
            console.log('data' , tempLt)
            // console.log('label' , tempLtLabel)
            setStockPriceHistoryList(tempLt)
            setLabels(tempLtLabel)
        }

        async function getStockNews(){
            const response  = await axios.get(newsUrl)
            console.log(response.data.data.articles)
            if (response.data!=null){
                setStockNewsList(response.data.data.articles)

            }
        }
        getStockPriceHistoryList()
        getStockNews()
    },[pid])

    const data = {
        labels:labelsData.slice(0,60).reverse(),
        datasets:[
            {
                label:'high stock prices',
                borderRadius:30,
                data:stockPriceHistoryList.slice(0,60).reverse(),
                barThickness:10,
                backgroundColor:"rgba(1,166,255,1)",
                
            }
        ]
    }
    Chart.register(CategoryScale ,...registerables)
    
    return (
        
        <div style={{width:'50%',minWidth:400 , marginRight:'auto' , marginLeft:'auto'}}>
            <h1 style={{fontWeight:'bold' , fontSize:22}}>{pid}</h1>
            <Line  data={data} height={200} style={{border:"1px solid" , padding:15 , borderRadius:10}} />
            <ChakraProvider>
                <StockCard  item={pid}/>
                {
                    stockNewsList.map((news)=>(
                        <StockNews items={news}/>
                    ))
                }
                
            </ChakraProvider>

        </div>
       
    )
}

export default StockPage;