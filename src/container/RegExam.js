import React, { Component } from 'react';
// import StepZilla from 'react-stepzilla';
// import ReactWizard from 'react-bootstrap-wizard';
// import ReactDOM from "react-dom";
// import ChooesExam from '../components/ChooesExam'
// import Payment from '../components/Payment'
// import StartExam from '../components/StartExam'
// import Verfi from '../components/Verfi'
import {Row, Col} from 'reactstrap';
import {Grid,Button,Image,Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './RegExam.css';

export default class RegExam extends Component {



    // renderFromChooesCerti(){
    //     return(
    //         <Grid>
    //             <Row className="picCer" >
    //                 <Col xs={6} md={4}>
    //                <Button><img src="http://www.biosci.global/wp-content/uploads/2016/10/Genstat-product-logo.png" /></Button>
    //                 </Col>
    //                 <Col xs={6} md={4}>
    //                 <Button ><img src="http://www.biosci.global/wp-content/uploads/2016/11/Asreml-product-logo.png" /></Button>
    //                 </Col>
    //                 <Col xs={6} md={4}>
    //                 <Button > <img src="http://www.biosci.global/wp-content/uploads/2016/12/IBP_No_BG-H-60.png" /></Button>
    //                 </Col>
    //             </Row>
    //             <Row className="picCer">
    //                 <Col xs={6} md={4}>
    //                 <Button><img src="http://www.biosci.global/wp-content/uploads/2017/08/DIB-Logo.png" /></Button>
    //                 </Col>
    //                 <Col xs={6} md={4}>
    //                 <Button ><img src="http://www.biosci.global/wp-content/uploads/2017/11/SIMS-logo.png" /></Button>
    //                 </Col>
    //                 <Col xs={6} md={4}>
    //                 <Button ><img src="http://www.biosci.global/wp-content/uploads/2018/03/ABP-logo-60.png" /></Button>
    //                 </Col>
    //             </Row>
    //         </Grid>
    //     );
    // }


    render() {
        // var  steps =
        //     [
        //         { stepName: 'Chooes Certificate Exam', component:ChooesExam },
        //         { stepName: 'Payment', component:Payment },
        //         { stepName: 'Verify', component:Verfi  },
        //         { stepName: 'Start', component:StartExam  },
        //     ]
        return (
            <Jumbotron>
                <h1>Chooes Certificate Exam </h1>
                 <Grid>
                <Row className="picCer" >
                    <Col xs={4} md={4}>
                   <Button ><Link to="/payment"><Image src="http://www.biosci.global/wp-content/uploads/2016/10/Genstat-product-logo.png" responsive /></Link></Button>
                    </Col>
                    <Col xs={4} md={4}>
                    <Button ><Link to="/payment"><Image src="http://www.biosci.global/wp-content/uploads/2016/11/Asreml-product-logo.png" responsive /></Link></Button>
                    </Col>
                    <Col xs={4} md={4}>
                    <Button ><Link to="/payment"> <Image src="http://www.biosci.global/wp-content/uploads/2016/12/IBP_No_BG-H-60.png" responsive /></Link></Button>
                    </Col>
                </Row>
                {/* <Row className="picCer">
                    <Col xs={6} md={4}>
                    <Button ><Link to="/payment"><Image src="http://www.biosci.global/wp-content/uploads/2017/08/DIB-Logo.png" /></Link></Button>
                    </Col>
                    <Col xs={6} md={4}>
                    <Button ><Link to="/payment"><Image src="http://www.biosci.global/wp-content/uploads/2017/11/SIMS-logo.png" /></Link></Button>
                    </Col>
                    <Col xs={6} md={4}>
                    <Button ><Link to="/payment"><Image src="http://www.biosci.global/wp-content/uploads/2018/03/ABP-logo-60.png" /></Link></Button>
                    </Col>
                </Row> */}
            </Grid>
            {/* <Row>
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
            */}
            </Jumbotron>
            

        );
    }
}