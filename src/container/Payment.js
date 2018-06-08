import React, { Component } from 'react';
import { Form, HelpBlock, ControlLabel, FormGroup, Row, Col, FormControl, Button, PageHeader, Grid } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Cards from 'react-credit-cards';
import Payments from "payment";
import 'react-credit-cards/es/styles-compiled.css';


import './Payment.css';
function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            {/* <ControlLabel >{label}</ControlLabel> */}
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}


export default class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: '',
            expiry: '',
            cvc: '',
            name: '',
            focused: ''
        };
    }
    componentDidMount(){
        Payments.formatCardNumber(document.querySelector('[name="number"]'));
        Payments.formatCardExpiry(document.querySelector('[name="expiry"]'));
        Payments.formatCardCVC(document.querySelector('[name="cvc"]'));
    }
    handleInputChange = ({ target }) => {
        if (target.name == 'number') {
            this.setState({
                [target.name]: target.value.replace(/ /g, ''),
            });
        }
        else if (target.name == 'expiry') {
            this.setState({
                [target.name]: target.value.replace(/ |\//g, ''),
            });
        }
        else {
            this.setState({
                [target.name]: target.value,
            });
        }
    };
    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name,
        });
    };


    render() {
        const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
        const { number, expiry, cvc, name, focused } = this.state;
        return (
            <div>
                {/* <Jumbotron > */}
                <PageHeader className="textControl">  <small>Payment</small></PageHeader>
                {/* <Row> */}

                {/* <Col md={6}>  */}


                <Form >

                    <Col md={4}>
                        <Cards
                            number={number}
                            name={name}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focused}
                        />
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={12}>
                                <FieldGroup
                                    id="number"
                                    name="number"
                                    type="tel"
                                    placeholder="Enter number credit card"
                                    className="textControl"
                                    onKeyUp={this.handleInputChange}
                                    onFocus={this.handleInputFocus}

                                />
                            </Col>
                        </Row>
                        <Row>
                        <Col md={7}>
                                <FieldGroup
                                    id="nameCard"
                                    name="name"
                                    placeholder="Name"
                                    onKeyUp={this.handleInputChange}
                                    onFocus={this.handleInputFocus}

                                />
                            </Col>
                            <Col md={3}>
                                <FieldGroup
                                    id="expiry"
                                    name="expiry"
                                    placeholder="MM/YY"
                                    type="tel"
                                    onKeyUp={this.handleInputChange}
                                    onFocus={this.handleInputFocus}

                                />
                            </Col>
                            
                            <Col md={2}>
                                <FieldGroup
                                    id="cvvCard"
                                    placeholder="CVV"
                                    name="cvc"
                                    type="tel"
                                    onKeyUp={this.handleInputChange}
                                    onFocus={this.handleInputFocus}

                                />
                            </Col>

                        </Row>

                        <Row >
                            <Col md={1}>
                                <Link to="/verify"><Button type="submit" >Accept</Button></Link>
                            </Col>
                        </Row>
                    </Col>

                </Form>
                {/* </Col>
                </Row> */}
                {/* </Jumbotron> */}
            </div>
        )
    }
}