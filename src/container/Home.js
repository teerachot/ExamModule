import React, { Component } from 'react';
import {Well,PageHeader,Grid,Row,Col } from "react-bootstrap";
import "./Home.css"

export default class Home extends Component{
    render(){
        return(
            <div className="lander">
            <h1>MMA</h1>
            <p>Mix Model Acanadmy</p>
            </div>
        )
    }
}