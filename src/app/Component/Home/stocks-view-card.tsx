import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DisplayGraph } from '../graph';
import { TempGrapgh } from '../temp_graph';

export const StockViewCard=(props:any)=>{
    try{
    console.log("item",props.item.meta.companyName || "Company Name")
    }catch(e){
        console.log(e)
    }
    return (
        <div style={{marginTop:5 }}>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" style={{borderRadius:20}}>
                <CardContent style={{display:'flex' , flexDirection:'row'}}>
                    <div>
                        
                    <Typography variant="h6" component="div">
                        {props.item.symbol}
                    </Typography>
                    <Typography sx={{ mb: 1.5 , fontSize:15,padding:1 }} color="text.secondary">
                    {props.item.symbol}
                    </Typography>
                    </div>
                    <div style={{marginLeft:'auto' , marginRight:'auto', }}>
                        {/* <DisplayGraph style={{width:'20%',height:50}} /> */}
                        <TempGrapgh/>
                    </div> 
                    <div style={{marginLeft:'auto'  , backgroundColor:'#f3f3f3',padding:10 , borderRadius:5}}>
                    <Typography sx={{  fontSize:15 }} color="text.secondary">
                    {props.item.lastPrice}
                    </Typography>
                    <Typography sx={{ fontSize:12 , color : props.item.change.substring(0,1) =='-'? 'red':'green' }} color="text.secondary">
                    {props.item.change.substring(0,4)}
                    </Typography>
                    </div>
                    
                </CardContent>
                </Card>
            </Box>
        
        </div>
    )
}