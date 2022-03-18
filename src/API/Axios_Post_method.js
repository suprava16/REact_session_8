import React, { Component } from 'react'
import axios from 'axios'
export default class Axios_Post_method extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }
  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleLogin=()=>{
   axios.post("https://reqres.in/api/login",this.state)
   .then((result)=>{
     console.log(result.data)
   })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <input type="text" onChange={this.handleEmail} />
        <input type="password" onChange={this.handlePassword} />
        <button onClick={this.handleLogin}>LOGIN</button>
      </div>
    )
  }
}

