import React, { useEffect } from 'react'
import CardDashboard from '../components/blog/Card'
import { Grid } from '@mui/material'
import useBlogCalls from "../hooks/useBlogCalls"
import { useSelector } from 'react-redux'
import { flex } from '../globalStyles/globalStyles'

const Home = () => {
   const { getBlogData } = useBlogCalls()
    const { blogs } = useSelector((state) => state.blog)
    useEffect(() => {
    // getFirms()
    getBlogData(blogs)
  }, [])
  return (
    <div>
     <Grid container sx={flex}>
        {blogs?.map((blog) => (
          <Grid item key={blog?.id}>
            <CardDashboard blog={blog}  />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Home
