import React, { Component } from 'react';
import { Form, HelpBlock, ControlLabel, FormGroup,Row, Col, FormControl, Button, Jumbotron, PageHeader } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Payment.css';
function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel >{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}
export default class Payment extends Component {




    render() {
        return (
            <div>
                {/* <Jumbotron > */}
                    <PageHeader className="textControl">  <small>Payment</small></PageHeader>
                    <Form>
                        <Row>
                            <Col md ={12}>
                            <FieldGroup
                                id="NumberCard"
                                type="text"
                                placeholder="Enter number credit card"
                                className="textControl"
                            />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                            <FieldGroup 
                                id="mouthCard"
                                placeholder="MM"
                            />
                            </Col>
                            <Col md={1}>/</Col>
                            <Col md={2}>
                            <FieldGroup 
                                id="yearCard"
                                placeholder="YY"
                            />
                            </Col>
                            <Col mdOffset={4} md={3}>
                            <FieldGroup
                            id="cvvCard"
                            placeholder="CVV" 
                            />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                            <FieldGroup
                            id="nameCard"
                            placeholder="Name"
                            />
                            </Col>
                            </Row>
                            <Link to="/verify"><Button type="submit">Pay</Button></Link>
                    </Form>
                {/* </Jumbotron> */}
            </div>
        )
    }
}