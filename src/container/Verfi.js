import React, { Component } from 'react';
import { Form,FormGroup,Col,FormControl,Button,Grid,PageHeader  } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './Verfi.css'
export default class Verfi extends Component{
    render(){
        return(
          <Grid>
               <PageHeader className="textControlheader">
             <small>Verify Your Name</small>
             </PageHeader>
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
              <Col smOffset={2} sm={8} md={3}>
              <Link to="/noties"> <Button type="submit">Verify</Button></Link>
              </Col>
            </FormGroup>
          </Form>
        </Grid>
        );
    }
}