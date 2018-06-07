import React, { Component } from 'react';
import { Well, PageHeader, Button, Row,Col ,Grid} from 'react-bootstrap';
import { Link } from "react-router-dom";
export default class ExamFinish extends Component {


    render() {
        return (
            <div>
                <PageHeader className="textControl"><small>Finish Exam</small></PageHeader>
                <Well>
                    <Row className="textControl">
                        <Col  md={12}>
                        <p>Please wait result, We are checking your exam.We will send your result to email</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col  md={2}>
                        <Link to="/"><Button>Go home page</Button></Link>
                        </Col>
                        
                    </Row>
                </Well>
            </div>
        );
    }
}