import React from "react"

class Greet extends React.Component{
  render(){
    return(
      //fragmentation
      // <>
      // <h1>Good evening everyone...</h1>
      // <p>Nextstacks</p>
      // </>

      // <div>
      //   <h1>Good evening everyone...</h1>
      //  <p>Nextstacks</p>
      // </div>

      <React.Fragment>
        <h1>Good evening everyone...</h1>
        <p>Nextstacks</p>
      </React.Fragment>
    )
  }
}
export default Greet