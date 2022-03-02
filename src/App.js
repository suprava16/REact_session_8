// How to craete a component-class component or functional component
import React from "react"
import Greet from "./Greet"
import PropsCom from "./classcomponents/props/PropsCom"
import { StateVariables } from "./StateVariables/StateVariables"
class App extends React.Component {
  render() {
    return (
      <>
        {/* <Greet/> */}
        {/* <PropsCom name="suprava" email="suprava@gmail.com" age={27} address="bbsr"/> */}
        <StateVariables/>
      </>


    )
  }
}
export default App
