import React, { useEffect, useState } from 'react'
import useAuthCall from '../hooks/useAuthCall'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'
import {  Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import image from "../assets/blog.jpg"
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Dashboard', 'New Blog', 'About'];
const settings = ['Profile', 'Dashboard', "Logout"];

const Navbar = () => {
    const { currentUser } = useSelector((state) => state.auth)
    const [log,setLog] = useState("Login")
    // {currentUser && setLog("Login")}
    
    
    const navigate= useNavigate()
    const { logout } = useAuthCall()
   
    
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

  
    const handleCloseNavMenu = (e) => {
        
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = (e) => {
        setAnchorElUser(null);
        //   console.log(e.target.innerText)
    }

  return (
    
    <div>
      
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={image} alt="" width={150}/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">New Blog</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
                onClick={()=>
                {handleCloseNavMenu
                  navigate("/")
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Dashboard
              </Button>
               <Button
                onClick={()=>
                {handleCloseNavMenu
                  navigate("newblog")
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               New Blog
              </Button>
               <Button
                onClick={()=>
                {handleCloseNavMenu
                  navigate("about")
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               About
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
               <MenuItem onClick={()=>
                {handleCloseNavMenu
                  navigate("/")
                }}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
                <MenuItem onClick={()=>
                {handleCloseNavMenu
                  navigate("profile")
                }}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                {currentUser && <MenuItem onClick={()=>
                {handleCloseNavMenu
                  navigate("logout")
                }}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>}
                {!currentUser && <MenuItem onClick={()=>
                {handleCloseNavMenu
                //logout
                  navigate("login")
                }}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>}
                
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

    </div>
  )}
              

export default Navbar
