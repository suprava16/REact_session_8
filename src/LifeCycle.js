import React from "react"

export default class LifeCycle extends React.Component{

  constructor(){
    super()
    this.state={
      text:""
    }
  }
  componentDidMount(){
    console.log("hello from component did mount method")
  }
  componentDidUpdate(){
    console.log("hello from compoennt did update method")
  }
  handleChange=(event)=>{
    this.setState({
      text:event.target.value
    })
  }
  render(){
    console.log("render method")
    return(
      <div>
        <h1>life cycle methods</h1>
        <input type="text" onChange={this.handleChange}/>

      </div>
    )
  }
}