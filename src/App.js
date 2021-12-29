

import React from 'react';
import { Link } from 'react-router-dom';
import Child from './child';
// note- always import the componet with name starting with uppercase charecter;

class First extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            name: "Ashutosh"
        }
    }
    Increment = () => {
        this.setState({ value: this.state.value + 1 });
    }

    Decrement = () => {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return (
            <div className="App" >

                <div>
                    <Child mainValue={this.state.value} />
                    <div style={{ textAlign: 'center' }}>

                        <button onClick={this.Increment} style={{ margin: '20px' }}>Increment</button>
                        <button onClick={this.Decrement}>Decrement</button>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button ><Link to='/Second' style={{ textAlign: 'center' }}> Navigate</Link></button>
                    </div>


                </div >


            </div >
        );
    }
}

export default First;

/* JSX - JavaScript XML - JS Inside HTML - {}
   State - Internal to Component - Mutable
   Props - transfer data from parent to child component - Immutable
   Constructor - Initialize the state variables for a component
     <Child mainValue={this.state.value} />
     <button onClick={this.handleNavigate}>Navigate</button>
     handleNavigate = () => {
        this.props.history.push('/Second');
    }
     
    
     <button><link to ="/Second"> Navigate</link></button>


     <h1>{this.state.value}</h1>
*/


