import React from "react";
import { Component } from "react";

export class Counter extends Component{
    constructor(){
        super();
        this.state= {
            counter:0,
        }
    }
    render(){
        return(
            <>
            <h1>Counter Value is: {this.state.counter}</h1>
            <button>CLICKED</button>
             </>

        )
    }
}

export default Counter