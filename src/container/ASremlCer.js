import React, { Component } from 'react';
import {Well,Button,Row,Col,PageHeader,ControlLabel  } from "react-bootstrap";
import {Link} from "react-router-dom";
import Stepper from 'react-stepper-horizontal';

export default class ASremlCer extends Component{
    render(){
      var steps = [
        { title: '' }, 
        { title: 'Introduction' }, 
        { title: 'Middle' }, 
        { title: 'High' }]
        return(
            <div>
            <PageHeader className="textControl"><small>My ASreml's Level</small></PageHeader>
            <Well className="textControl">
              <Row>
                <Col mdOffset={2} md={2}>
                  <ControlLabel className="textCer">ASreml</ControlLabel>
                </Col>
                <Col md={7}>
                  <div><Stepper steps={steps} activeStep={1} /></div>
                </Col>
              </Row>
              <Row>
                  <Col mdOffset={9} md={3}>
                  <Link to="/payment"><Button>Go to Exam For Next Level</Button></Link>
                  </Col>
                  </Row>
              </Well>

              </div>
        )
    }
}