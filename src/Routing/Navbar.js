import React from 'react'
import {Link,Outlet} from "react-router-dom"
function Navbar() {
  return (
    <div>
      <Link to="/home">Home</Link> |
      <Link to="/about">About</Link> |
     
      <Link to="/contact">Contact</Link>
      <Outlet/>
     
    </div>
  )
}

export default Navbar