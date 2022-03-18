import React from "react"

export default function Props_methods(props){
  const{name,age}=props
  return(
    <div>
      <h1>name:{name}</h1>
      <h1>age:{props.age}</h1>
    </div>
  )
}