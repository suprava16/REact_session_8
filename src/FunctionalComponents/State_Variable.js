import React,{useState} from "react"

export default function State_Variable(){
  const[name,setName]=useState("suprava")
  const[email,setEmail]=useState("suprava@gmail.com")
  const handleClick=()=>{
    setName("supriya")
    setEmail("supriya@gmail.com")
  }
  return(
    <div>
      <h1>name:{name}</h1>
      <h1>email:{email}</h1>
      <button onClick={handleClick}>update</button>
    </div>
  )
}