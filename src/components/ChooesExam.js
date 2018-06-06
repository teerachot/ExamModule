import React, { Component } from 'react';
import { Row, Grid, Col,Button,Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './ChooesExam.css';

export default class ChooesExam extends Component {
    render() {
        return (
            <Grid>
                <Row className="picCer" >
                    <Col xs={6} md={4}>
                   <Button ><Link to="/"><Image src="http://www.biosci.global/wp-content/uploads/2016/10/Genstat-product-logo.png" /></Link></Button>
                    </Col>
                    <Col xs={6} md={4}>
                    <Button ><Image src="http://www.biosci.global/wp-content/uploads/2016/11/Asreml-product-logo.png" /></Button>
                    </Col>
                    <Col xs={6} md={4}>
                    <Button > <Image src="http://www.biosci.global/wp-content/uploads/2016/12/IBP_No_BG-H-60.png" /></Button>
                    </Col>
                </Row>
                <Row className="picCer">
                    <Col xs={6} md={4}>
                    <Button ><Image src="http://www.biosci.global/wp-content/uploads/2017/08/DIB-Logo.png" /></Button>
                    </Col>
                    <Col xs={6} md={4}>
                    <Button ><Image src="http://www.biosci.global/wp-content/uploads/2017/11/SIMS-logo.png" /></Button>
                    </Col>
                    <Col xs={6} md={4}>
                    <Button ><Image src="http://www.biosci.global/wp-content/uploads/2018/03/ABP-logo-60.png" /></Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}