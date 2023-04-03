import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import useBlogCalls from "../hooks/useBlogCalls"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { flex } from '../globalStyles/globalStyles';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useSelector } from 'react-redux';
import ImgMediaCard from '../components/blog/Card';


   

const Detail = () => {
  const {getBlogData} = useBlogCalls()
  const { blogs } = useSelector((state) => state.blog)
  
  const {id} = useParams();
  
  
  useEffect(() => {
    getBlogData()
  }, [])
  const filteredBlogs= blogs.filter((blog) => blog.id == id)
  console.log(filteredBlogs)
  // eslint-disable-lin
  return (
    <div>
      <h1>Detail</h1>
      <p>{id}</p>
      <Grid container sx={flex}>
        {filteredBlogs?.map((blog) => (
          <Grid item key={blog?.id}>
            <ImgMediaCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    
      {/* <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      /> */}
      
    </div>
  )
}

export default Detail
