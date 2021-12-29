import React from "react";
class Child extends React.Component{
    render()
    {
        return(
      <div> 
          <h1 style={{textAlign:'center'}}>Increment and Decrement using React</h1>
          <h1 style={{textAlign:'center'}}>{this.props.mainValue}</h1>
      </div>

        )
    }
    
}
export default Child;