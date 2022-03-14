import React, { Component } from 'react'

export default class Fetch extends Component {
  constructor(){
    super()
    this.state={
      user:[]
    }
  }
  componentDidMount(){
    fetch("https://reqres.in/api/users?page=2")
    .then((response)=>(response.json()))
    .then((result)=>{
      console.log(result.data)
      this.setState({
        user:result.data
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Fetching data</h1>
        {this.state.user.map((item,i)=>{
          return(
            <div>
            <h1>Email:{item.email}</h1>
            <img src={item.avatar} alt="image"/>
            </div>
          )
        })}
      </div>
    )
  }
}

