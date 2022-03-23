import React from 'react'
import { useParams } from 'react-router-dom'
function Contact() {

  const parameters=useParams();
  console.log(parameters)

  return (
    <div>Contact
    <h1>id value:{parameters.id}</h1>
    </div>
  )
}

export default Contact