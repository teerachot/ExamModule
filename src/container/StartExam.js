import React, { Component } from 'react';
import { Grid, PageHeader, Jumbotron, Row, ButtonToolbar, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './StartExam.css'

export default class StartExam extends Component {
    constructor(props){
        super(props);
        this.handleClose=this.handleClose.bind(this);
        this.handleShow=this.handleShow.bind(this);
        this.state={
            show:false
        }
    }
    handleClose(){
        this.setState({show:false});
    }
    handleShow(){
        this.setState({show:true});
    }

    render() {
        return (
            <Grid>
                <PageHeader className="textControl"><small>Important Notice</small></PageHeader>
                <Jumbotron className="textControl">
                    <Row>
                        <p>Please check your name it's correct.because we will use push your name in your Certificate</p>
                    </Row>
                    <Row>
                        <p>Please read <a onClick={this.handleShow}>exam agreement</a>.</p>

                    </Row>
                    <Row>
                        <p></p>
                    </Row>
                    <Row>
                        <ButtonToolbar>
                            <Link to="/verify"><Button>Edit your name</Button></Link>
                            <Link to="/cerfiexams"><Button>Agree and Start Exam</Button></Link>
                        </ButtonToolbar>
                    </Row>
                </Jumbotron>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <h1>Exam agreement </h1>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Rule</p>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button onClick={this.handleClose}>Close</Button>

                    </Modal.Footer>
                </Modal>
            </Grid>
        )
    }
}