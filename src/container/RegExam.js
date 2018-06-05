import React, { Component } from 'react';
// import StepZilla from 'react-stepzilla';
import ReactWizard from 'react-bootstrap-wizard';
import ReactDOM from "react-dom";
import ChooesExam from '../components/ChooesExam'
import Payment from '../components/Payment'
import StartExam from '../components/StartExam'
import Verfi from '../components/Verfi'
import {Container,Row, Col} from 'reactstrap'


export default class RegExam extends Component {


    render() {
        var  steps =
            [
                { stepName: 'Chooes Exam', component:ChooesExam },
                { stepName: 'Payment', component:Payment },
                { stepName: 'Verfi', component:<Verfi/>  },
                { stepName: 'Start', component:StartExam  },
            ]
        return (
            <Container>
            <Row>
                <Col >
                    <ReactWizard
                        steps={steps}
                        title=""
                        headerTextCenter
                        validate
                        color="green"
                        finishButtonText="DO Exam"
                    />
                </Col>
            </Row>
            <Verfi/> 
            </Container>
            

        );
    }
}