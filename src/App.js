// How to craete a component-class component or functional component
import React from "react"
import Greet from "./Greet"
import PropsCom from "./classcomponents/props/PropsCom"
import { StateVariables } from "./StateVariables/StateVariables"
import SetStateMethod from "./StateVariables/SetStateMethod"
import AddData from "./StateVariables/AddData"
import ArrayCom from "./Array/ArrayCom"
import ArrayObject from "./Array/ArrayObject"
import Conditions from "./ConditionalRenderning/Conditions"
import Post_method from "./API/Post_method"
class App extends React.Component {
  render() {
    return (
      <>
        {/* <Greet/> */}
        {/* <PropsCom name="suprava" email="suprava@gmail.com" age={27} address="bbsr"/> */}
        {/* <StateVariables/> */}
        {/* <SetStateMethod/> */}
        {/* <AddData/> */}
        {/* <ArrayCom/> */}
        {/* <ArrayObject/> */}
        {/* <Conditions/> */}
        <Post_method/>
      </>


    )
  }
}
export default App
