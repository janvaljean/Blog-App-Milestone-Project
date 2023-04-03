import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { flex } from '../../globalStyles/globalStyles';
import useBlogCall from '../../hooks/useBlogCalls';
import { useState } from 'react';

export default function ImgMediaCard({blog,setOpen, setInfo }){
    
    const { currentUser } = useSelector((state) => state.auth)
    const {postLikeCreate} = useBlogCall()
    
    
    const navigate = useNavigate()
    

    const likeCounter = () =>{
        
        postLikeCreate(blog?.id)
        console.log(blog?.likes);
    }
    const goMaintoDetail = () =>{
      currentUser ? navigate(`details/${blog.id}`) : navigate("login/")
    }


  return (
    <Card 
    
    sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={blog?.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog?.content}
        </Typography>
      </CardContent>
      <CardActions sx={flex}>
        <FavoriteBorderIcon onClick={likeCounter} />
        {blog?.like}
        <ChatBubbleOutlineIcon/>
        {blog?.comment_count}
        <RemoveRedEyeOutlinedIcon/>
        {blog?.post_views}
        <Button
            onClick={goMaintoDetail}
            variant="contained" size="small" >Read More</Button>
      </CardActions>
    </Card>
  );
}