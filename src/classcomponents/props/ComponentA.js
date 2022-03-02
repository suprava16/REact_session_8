import React from "react"

class ComponentA extends React.Component{
  render(){
    console.log(this)
    return(
      <div>
        <h1>compoenent A</h1>
        <h1>Roll:{this.props.roll}</h1>
        <h1>Email:{this.props.data.email}</h1>
        <h1>Name:{this.props.data.name}</h1>
      </div>
    )
  }
}
export default ComponentA