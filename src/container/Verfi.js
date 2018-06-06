import React, { Component } from 'react';
import { Form,FormGroup,Col,FormControl,Checkbox,Button  } from "react-bootstrap";
import {Link} from ""

export default class Verfi extends Component{
    render(){
        return(
          <div>
              <div>
            <h1>Verify Your Name</h1>
            </div>
            <Form horizontal>
            
            <FormGroup controlId="formHorizontalFirstName">
              <Col smOffset={1} sm={2}>
                First Name
              </Col>
              <Col sm={8}>
                <FormControl type="FirstName" placeholder="First Name" />
              </Col>
            </FormGroup>
          
            <FormGroup controlId="formHorizontalLastName">
              <Col  smOffset={1} sm={2}>
                Last Name
              </Col>
              <Col sm={8}>
                <FormControl type="LastName" placeholder="Last Name" />
              </Col>
            </FormGroup>
          
            {/* <FormGroup>
              <Col smOffset={2}sm={8}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup> */}
          
            <FormGroup>
              <Col smOffset={2} sm={8}>
                <Button >Verify</Button>
              </Col>
            </FormGroup>
          </Form>
          </div>
        )
    }
}