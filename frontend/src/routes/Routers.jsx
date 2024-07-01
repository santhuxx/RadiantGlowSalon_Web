import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Beauticians from '../pages/Beauticians/Beauticians'
import BeauticianDetails from '../pages/Beauticians/BeauticianDetails'


import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/beauticians" element={<Beauticians/>}/>
    <Route path="/beauticians/:id" element={<BeauticianDetails/>}/>
  </Routes>  
    
}

export default Routers
