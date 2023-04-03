import React from 'react'
import NewBlog from '../pages/NewBlog'
import Main from '../pages/Main'
import About from '../pages/About'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivateRouter from "./PrivateRouter"
import Profile from '../pages/Profile'

const AppRouter = () => {
  return (
    <div>
        <Router>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="details/:id" element={<Detail />} />
            <Route path="newblog" element={<NewBlog />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>

      
    </div>
  )
}

export default AppRouter
