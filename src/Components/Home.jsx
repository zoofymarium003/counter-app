import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            cnt:0
        }
        this.Increment=this.Increment.bind(this)
        this.Decrement=this.Decrement.bind(this)
        this.Reset=this.Reset.bind(this)
    }

Increment(){
const cnt=this.state.cnt
this.setState({cnt:cnt+1})
}
Decrement(){
    const cnt=this.state.cnt
    if(cnt>0)
    this.setState({cnt:cnt-1})
}
Reset(){
    const cnt=this.state.cnt
    this.setState({cnt:0})
}
    render() {
        return (
            <div>
                <h6>---Simple Counter App---</h6>
                <h1>{this.state.cnt}</h1>
                <button onClick={this.Increment}>+</button>
                <button onClick={this.Decrement}>-</button>
                <button onClick={this.Reset}>Reset</button>
            </div>
        );
    }
    
}


export default Home;