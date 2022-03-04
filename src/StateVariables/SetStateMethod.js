import React from "react";

export default class SetStateMethod extends React.Component{
  constructor(){
    super();
    this.state={
      name:"suprava",
      email:"suprava@gmail.com",
      address:""
    }
  }
  handleClick=()=>{
    this.setState({
      name:"Rinky",
      email:"rinky@gmail.com"
    })
  }

  handleChange=(event)=>{
    this.setState({
      address: event.target.value
    })
  }
  render(){
    return(
      <div>
        <h1>name:{this.state.name}</h1>
        <h1>email:{this.state.email}</h1>
        <button onClick={this.handleClick}>Update</button><br/>

        <input type="text" placeholder="enter address" onChange={this.handleChange}/>
        <h1>Address:{this.state.address}</h1>


      </div>
    )
  }
}
