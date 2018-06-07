import React, { Component } from 'react'
import { Well, PageHeader, ButtonToolbar, Button, Form, Row, Col, Modal, DropdownButton, MenuItem } from 'react-bootstrap'
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
                <PageHeader className="timerControl">
                    <DropdownButton
                        title="section"
                    >
                        <MenuItem href="#1">1</MenuItem>
                        <MenuItem href="#2">2</MenuItem>
                        <MenuItem href="#3">3</MenuItem>
                    </DropdownButton>
                    <small>00:00:00</small>
                </PageHeader>
                <Form>
                    <Row>
                        <Well >
                            <Row >
                                <p id="1">Exam1</p>
                            </Row>
                            <Row >
                                <p id="2">Exam2adfasdfadfadf</p>
                            </Row>
                            <Row >
                                <p id="3">Exam3</p>
                            </Row>
                        </Well>

                    </Row>
                    <Row>
                        <Col mdOffset={11}>
                            <ButtonToolbar>
                                <Button onClick={this.handleOpen}>Submit</Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Form>
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