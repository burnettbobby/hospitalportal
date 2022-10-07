import React from "react";
import { Component } from "react";

class Hello extends React.Component {

    render() {
           return <h1>Hello <p>**class based component**</p> {this.props.name}</h1>;
    }
}

export default Hello; 