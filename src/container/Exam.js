import React, { Component } from 'react'
import { Well, Navbar, Grid, Radio, Button, Nav, Form, Row, Col, Modal, NavDropdown, MenuItem, NavItem, FormGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './Exam.css'
export default class Exam extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.state = {
            show: false
        }
    }

    handleClose() {
        this.setState({ show: false });
    }
    handleOpen() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <Navbar className="timerControl"  fixedTop={true} >
                    <Nav>
                        <NavDropdown
                            title="Question"
                        >
                            <MenuItem href="#1">1</MenuItem>
                            <MenuItem href="#2">2</MenuItem>
                            <MenuItem href="#3">3</MenuItem>
                            <MenuItem href="#4">4</MenuItem>
                            <MenuItem href="#5">5</MenuItem>
                            <MenuItem href="#6">6</MenuItem>
                            <MenuItem href="#7">7</MenuItem>
                            <MenuItem href="#8">8</MenuItem>
                            <MenuItem href="#9">9</MenuItem>
                            <MenuItem href="#10">10</MenuItem>
                        </NavDropdown>
                        <NavItem>00:00:00</NavItem>
                    </Nav>
                </Navbar>
                <Well>
                <Form>
                    <Grid>
                            <Row >
                                <Col mdOffset={2}>
                                <p  id="1" className="textControl">Question 1</p>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Radio name="radioGroup" inline>1.Answer1</Radio>{' '}
                                <Radio name="radioGroup" inline>2.Answer2</Radio>{' '}
                                <Radio name="radioGroup" inline>3.Answer3</Radio>{' '}
                                <Radio name="radioGroup" inline>4.Answer4</Radio>
                            </FormGroup>

                            <Row >
                                <Col mdOffset={2} >
                                    <p id="2" className="textControl">Question 2</p>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Radio name="radioGroup2" inline>1.Answer1</Radio>{' '}
                                <Radio name="radioGroup2" inline>2.Answer2</Radio>{' '}
                                <Radio name="radioGroup2" inline>3.Answer3</Radio>{' '}
                                <Radio name="radioGroup2" inline>4.Answer4</Radio>
                            </FormGroup>

                            <Row >
                                <Col mdOffset={2}>
                                    <p id="3" className="textControl">Question 3</p>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Radio name="radioGroup3" inline>1.Answer1</Radio>{' '}
                                <Radio name="radioGroup3" inline>2.Answer2</Radio>{' '}
                                <Radio name="radioGroup3" inline>3.Answer3</Radio>{' '}
                                <Radio name="radioGroup3" inline>4.Answer4</Radio>
                            </FormGroup>

                            <Row >
                                <Col mdOffset={2}>
                                    <p id="4" className="textControl">Question 4</p>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Radio name="radioGroup4" inline>1.Answer1</Radio>{' '}
                                <Radio name="radioGroup4" inline>2.Answer2</Radio>{' '}
                                <Radio name="radioGroup4" inline>3.Answer3</Radio>{' '}
                                <Radio name="radioGroup4" inline>4.Answer4</Radio>
                            </FormGroup>

                            <Row >
                                <Col mdOffset={2}>
                                    <p id="5" className="textControl">Question 5</p>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Radio name="radioGroup5" inline>1.Answer1</Radio>{' '}
                                <Radio name="radioGroup5" inline>2.Answer2</Radio>{' '}
                                <Radio name="radioGroup5" inline>3.Answer3</Radio>{' '}
                                <Radio name="radioGroup5" inline>4.Answer4</Radio>
                            </FormGroup>

                            <Row >
                                <Col mdOffset={2}>
                                    <p id="6" className="textControl">Question 6</p>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Radio name="radioGroup6" inline>1.Answer1</Radio>{' '}
                                <Radio name="radioGroup6" inline>2.Answer2</Radio>{' '}
                                <Radio name="radioGroup6" inline>3.Answer3</Radio>{' '}
                                <Radio name="radioGroup6" inline>4.Answer4</Radio>
                            </FormGroup>
                            <Row >
                                <Col mdOffset={2}>
                                    <p id="7" className="textControl">Question 7</p>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Radio name="radioGroup7" inline>1.Answer1</Radio>{' '}
                                <Radio name="radioGroup7" inline>2.Answer2</Radio>{' '}
                                <Radio name="radioGroup7" inline>3.Answer3</Radio>{' '}
                                <Radio name="radioGroup7" inline>4.Answer4</Radio>
                            </FormGroup>
                            <Row >
                                <Col mdOffset={2}>
                                    <p id="8" className="textControl">Question 8</p>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Radio name="radioGroup8" inline>1.Answer1</Radio>{' '}
                                <Radio name="radioGroup8" inline>2.Answer2</Radio>{' '}
                                <Radio name="radioGroup8" inline>3.Answer3</Radio>{' '}
                                <Radio name="radioGroup8" inline>4.Answer4</Radio>
                            </FormGroup>
                            <Row >
                                <Col mdOffset={2}>
                                    <p id="9" className="textControl">Question 9</p>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Radio name="radioGroup9" inline>1.Answer1</Radio>{' '}
                                <Radio name="radioGroup9" inline>2.Answer2</Radio>{' '}
                                <Radio name="radioGroup9" inline>3.Answer3</Radio>{' '}
                                <Radio name="radioGroup9" inline>4.Answer4</Radio>
                            </FormGroup>
                            <Row >
                                <Col mdOffset={2}>
                                    <p id="10" className="textControl">Question 10</p>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Radio name="radioGroup10" inline>1.Answer1</Radio>{' '}
                                <Radio name="radioGroup10" inline>2.Answer2</Radio>{' '}
                                <Radio name="radioGroup10" inline>3.Answer3</Radio>{' '}
                                <Radio name="radioGroup10" inline>4.Answer4</Radio>
                            </FormGroup>


                      

                   
                    <Row>
                        <Col mdOffset={10}>
                            <FormGroup>
                                <Button onClick={this.handleOpen}>Submit</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                    </Grid>
                </Form>
                </Well>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>
                        <p>Please check your answer if your answer is corret. Submit your answer</p>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button onClick={this.handleClose}>Cannel</Button>
                        <Link to="/finish"><Button bsStyle="primary" type="submit">Submit</Button></Link>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}