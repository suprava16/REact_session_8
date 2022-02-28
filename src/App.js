// How to craete a component-class component or functional component
import React from "react"
import Greet from "./Greet"
import PropsCom from "./classcomponents/props/PropsCom"
class App extends React.Component{
  render(){
    return(
     <>
      <h1>my app component</h1>
      {/* <Greet/> */}
      <PropsCom name="suprava" email="suprava@gmail.com" age={27} address="bbsr"/>
      </>

    
    )
  }
}
export default App
