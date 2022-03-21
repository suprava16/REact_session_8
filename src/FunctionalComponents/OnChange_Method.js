import React,{useState,useEffect} from "react"

export default function OnChange_Method(){
  const[user,setUser]=useState({email:"",password:""})
  // useEffect(()=>{
  //   api call
  // },[])
  const handleEmail=(event)=>{
    setUser({
      ...user,
      email:event.target.value
    })
  }
  const handlePassword=(event)=>{
    setUser({
      ...user,
      password:event.target.value
    })
  }
  return(
    <div>
      <input type="text" placeholder="enter email" onChange={handleEmail}/>
      <input type="password" placeholder="enter password" onChange={handlePassword}/>
      <h1>Email:{user.email}</h1>
      <h1>Password:{user.password}</h1>
    </div>
  )
}