import React, { Component } from 'react';
import Navigation from './Navigation';
import Stationary from './Stationary';



class App2 extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <React.Fragment>
            <div style={{backgroundColor: 'goldenrod'}}>
                <h1>You've Been Chirped</h1>
                <Navigation />
                {/* <button type='button' className='btn btn-outline-warning'>Submit</button>
                <div className="alert alert-success" role="alert">
                    A simple success alert—check it out!
                </div> */}
            </div>
            <div>
                <Stationary />
            </div>
    
            </React.Fragment>
        );

    }
};
export default App2