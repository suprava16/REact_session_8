import React from 'react'
import {Link,Outlet} from "react-router-dom"
function Navbar() {
  return (
    <div>
      <Link to="/home">Home</Link> |
      <Link to="/about" state={{name:"Reactjs"}}>About</Link> |
     
      <Link to="/contact/123">Contact</Link>
      <Outlet/>
     
    </div>
  )
}

export default Navbar