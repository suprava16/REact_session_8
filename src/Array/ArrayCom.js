import React from "react"

export default class ArrayCom extends React.Component{
  constructor(){
    super()
    this.state={
      data:["Rahul","Ram","Rinky","Tony","Rima"]
    }
  }
  render(){
    return(
      <div>
        {this.state.data.map((item,index)=>{
          return(
            <div key={index}>
              <h1 >Data:{index}-{item}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}