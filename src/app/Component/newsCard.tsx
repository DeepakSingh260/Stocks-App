import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

type propsType={
    item:{ 
        
    source: {
        id: string|null,
        name:string|null
    },
    author: string|null,
    title: string|null,
    description: string|null,
    url: string|null,
    urlToImage:string|null,
    publishedAt: string|null,
    content: string|null
},

    
}
export default function NewsReviewCard(props:propsType) {
    console.log('news',props.item)
  return (
    <Card sx={{ margin:2 , borderRadius:10 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.item.source.name?.substring(0,1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.item.title}
        subheader={props.item.publishedAt}
      />
      
      <CardMedia
        component="img"
        style={{height: props.item.urlToImage == null ? 0 : 194}}
        image={props.item.urlToImage!!}
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {props.item.description}
        </Typography>
      </CardContent>
 
    </Card>
  );
}
export const NewsView=()=>{
    
    const [newsList, setNewsList] = React.useState([])

    React.useEffect(()=>{
        async function getNewsList(){

            const response = await axios.get('http://localhost:3000/stock-news/')
            console.log(response.data.data.articles)
            setNewsList(response.data.data.articles)

        } 

        getNewsList()
    },[])
    return (
        <div style={{width:'90%' , marginLeft:'auto' , marginRight:'auto'}}>
            <h1>Top News</h1>
        <div style={{display:'flex' , flexDirection:'row' , overflow:'scroll'}}>
            <ScrollMenu  >
            {
            newsList.map((news)=>(
                <NewsReviewCard item={news}/>
            ))
            
            }
            </ScrollMenu>
        </div>
        </div>
    )
}
