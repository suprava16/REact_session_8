import React from "react"

export default class ArrayObject extends React.Component {
  constructor() {
    super()
    this.state = {
      user: [
        {
          name: "suprava",
          email: "suprava@gmail.com"
        },
        {
          name: "Rima",
          email: "rima@gmail.com"
        },
        {
          name: "rinky",
          email: "rinky@gmail.com"
        },
        {
          name: "Tony",
          email: "tony@gmail.com"
        },
        {
          name: "Sony",
          email: "sony@gmail.com"
        },
      ]
    }
  }
  handlePush=()=>{
    var temp=this.state.user
    temp.push({
      name:"Sima",
      email:"sima@gmail.com"

    })
    this.setState({
      user:temp
    })

  }
  handlePop=()=>{
    var temp=this.state.user
    temp.pop()
    this.setState({
      user:temp
    })


  }
  render() {
    return ( 
      <div>
          {this.state.user.map((item,index)=>{
              return(
                <div key={index}>
                  <h1>name:{item.name}</h1>
                  <h1>email:{item.email}</h1>
                  
                </div>
              )
          })}
          <button onClick={this.handlePush}>PUSH</button>
          <button onClick={this.handlePop}>POP</button>
      </div>
    )
  }
}