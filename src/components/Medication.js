import React from "react";
import { Component } from "react";

export class Medication extends Component{
    render(){
        return(
            <>
                <h3>MEDICAL INFORMATION</h3>
                <h5>Medicine: {this.props.medicine}</h5>
                <h5>Dose: {this.props.dose}</h5>
            </>
        )
    }
}

export default Medication;