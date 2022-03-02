import React from "react"

export class StateVariables extends React.Component{

  constructor(){
    super(); //to call parent compoent constructor
    this.state={
     name:"suprava",
     email:"suprava@gmail.com"   
    }
  }
render(){
  const{name,email}=this.state
  return(
    <div>
      <h1>State varibales</h1>
      <h1>name:{name}</h1>
      <h1>email:{this.state.email}</h1>

    </div>
  )
}
}
// export default StateVariables