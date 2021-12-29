import React from "react";
import {Link} from 'react-router-dom'  
class Second extends React.Component {
handleNavigate=()=>{
this.props.history.push('/');
}
render()
{
   

    return (
        <div className="Second">

<h1  style={{ textAlign: 'center' }}>Welcome to the second page Using Navigation</h1>
            <div  style={{ textAlign: 'center' }}>
                
                <button><Link to ='/'  style={{ textAlign: 'center' }}> Navigate</Link></button>
            </div>

        </div>
    );
}

  
}
export default Second;

//<button onClick={this.handleNavigate}>Back Button</button>