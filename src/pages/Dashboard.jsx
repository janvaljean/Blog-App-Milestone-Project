import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import { useSelector } from "react-redux"
import useAuthCall from "../hooks/useAuthCall"
import { Outlet } from "react-router-dom"
import { blueGrey } from "@mui/material/colors"
import Navbar from '../components/Navbar'
const drawerWidth = 200

function Dashboard(props) {
  const { currentUser } = useSelector((state) => state.auth)
  const { logout } = useAuthCall()
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )}

export default Dashboard

