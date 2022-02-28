//props- used to pass data from one compoenent to another.

import React from "react"

class PropsCom extends React.Component{

  render(){
    console.log(this.props)
    //Destructuring
    const{name,age,address,email}=this.props
    return(
      <div>
        <h1>Passing Props </h1>
        <h1>name:{name}</h1>
        <h1>email:{this.props.email}</h1>
        <h1>age:{this.props.age}</h1>
        <h1>address:{this.props.address}</h1>
      </div>
    )
  }
}
export default PropsCom