import React from 'react'
import { useLocation } from 'react-router-dom'
function About() {
  const values=useLocation()
  console.log(values)
  return (
    <div>About Component
    <h1>name:{values.state.name}</h1>
    </div>
  )
}

export default About