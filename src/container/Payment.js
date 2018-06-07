import React, { Component } from 'react';
import { Form, HelpBlock, ControlLabel, FormGroup, Row, Col, FormControl, Button, PageHeader } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Cards from 'react-credit-cards';
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
    constructor(props){
        super(props)
    }

    render() {
        const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

        return (
            <div>
                {/* <Jumbotron > */}
                <PageHeader className="textControl">  <small>Payment</small></PageHeader>
                {/* <Row>
                    <Col md={6}>
                    <Cards
                    number={input.NumberCard.value}
                    name={input.name.value}
                    expiry={input.expiry.value}
                    cvc={input.cvvCard.value}
                    focused={state.focused}
                    />
                    </Col>
                    <Col md={6}>  */}
                        <Form >
                            <Row>
                                <Col md={12}>
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
                            <Row >
                                <Col mdOffset={11}>
                                    <Link to="/verify"><Button type="submit" >Accept</Button></Link>
                                </Col>
                            </Row>
                        </Form>
                    {/* </Col>
                </Row> */}
                {/* </Jumbotron> */}
            </div>
        )
    }
}