import React from "react";
import { Component } from "react";

export class Counter extends Component{
    constructor(){
        super();
        this.state= {
            counter:0,
        }
    }

    increment() {
        this.setState({ // set the state
            counter: this.state.counter + 1, // getting the counter value (0) and adding one. We now need to set an event handler.
        });
    }

    decrement(){
        this.setState({ // set the state
            counter: this.state.counter - 1,
        });
    }
    render(){
        return(
            <>
            <h1>Counter Value is: {this.state.counter}</h1>
            <button className="BUTTON" onClick={() => this.increment()}>Incremenet</button>
            <button className="BUTTON" onClick={() => this.decrement()}>Decrement</button>
             </>

        )
    }
}

export default Counter;