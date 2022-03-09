import React from "react"

export default class Conditions extends React.Component{

  constructor(){
    super()
    this.state={
      num:30,
      text:""
    }
  }
  handleChange=(event)=>{
    this.setState({
      text: event.target.value
    })
  }
  render(){
  
    return(
      <div>
       {this.state.num===20?<h1>Hello</h1>:<h1>Bye</h1>}

       {this.state.num===30 &&
       <h1>Simple if statement</h1>
       }
       <input type="text" onChange={this.handleChange}/>
       <button disabled={this.state.text===""?true:false}>ADD</button>



      </div>
    )
  }
}