import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/blog/Card'
import useBlogCalls from "../hooks/useBlogCalls"
import { useSelector } from 'react-redux'
import { Button, Grid, Typography } from '@mui/material'
import { flex } from '../globalStyles/globalStyles'
import Dashboard from './Dashboard'

const Main = () => {
    const { getBlogData } = useBlogCalls()
    const { blogs } = useSelector((state) => state.blog)
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  })
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    // getFirms()
    getBlogData(blogs)
  }, []) // eslint-disable-line
  return (
    <div>
        <h1>Main</h1>

      <Navbar/>
        
      {/* <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      /> */}
      <Grid container sx={flex}>
        {blogs?.map((blog) => (
          <Grid item key={blog?.id}>
            <Card blog={blog} setOpen={setOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>


    </div>
  )
}

export default Main
