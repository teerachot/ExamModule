import React, { Component } from 'react';
import { PageHeader, Row, Col, Grid, Well, Label, ControlLabel } from "react-bootstrap";
import Stepper from 'react-stepper-horizontal';
import "./DashBoard.css";

export default class DashBoard extends Component {
 

render() {
  var steps = [
    { title: '' }, 
    { title: 'Introduction' }, 
    { title: 'Middle' }, 
    { title: 'High' }]
  return (
    <div>
      <PageHeader className="textControl"><small>DashBoard</small></PageHeader>
      <Well className="textControl">
        <Row>
          <Col mdOffset={2} md={2}>
            <ControlLabel className="textCer">Genstat</ControlLabel>
          </Col>
          <Col md={7}>
            <div><Stepper steps={steps} activeStep={2} /></div>
          </Col>
        </Row>
        <Row>
          <Col mdOffset={2} md={2} >
            <ControlLabel className="textCer">Asreml</ControlLabel>
          </Col>
          <Col md={7}>
            <div><Stepper steps={steps} activeStep={1} /></div>
          </Col>
        </Row>
        <Row>
          <Col mdOffset={1} md={3} >
            <ControlLabel className="textCer">Integrate Breeding Platform</ControlLabel>
          </Col>
          <Col md={7}>
            <div><Stepper steps={steps} activeStep={2} /></div>
          </Col>
        </Row>
      </Well>
    </div>
  )
}
}
