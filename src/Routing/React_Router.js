import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
function React_Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default React_Router