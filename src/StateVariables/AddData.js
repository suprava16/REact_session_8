import React from "react";

export default class AddData extends React.Component{
  constructor(){
    super()
    this.state={
      num1:0,
      num2:0,
      result:0
    }
  }
  handleNum1=(event)=>{
    this.setState({
      num1: event.target.value
    })
  }

  handleNum2=(event)=>{
    this.setState({
      num2:event.target.value
    })
  }
  handleSum=()=>{
    this.setState({
      result:parseInt(this.state.num1)+parseInt(this.state.num2)
    })
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.num1} onChange={this.handleNum1}/>
        <input type="text" value={this.state.num2} onChange={this.handleNum2}/>
        <button onClick={this.handleSum}>Add</button>
        <h1>Result:{this.state.result}</h1>
      </div>
    )
  }
}