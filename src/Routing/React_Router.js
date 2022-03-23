import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Error from './Error'
function React_Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact/:id" element={<Contact/>}/>
          </Route>

          {/* handling error page */}
          {/* <Route path="*" element={<Error/>}/> */}
          <Route path="/error" element={<Error/>}/>
          <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default React_Router