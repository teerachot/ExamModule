import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home"
import RegExam from  "./container/RegExam"
import Payment from "./container/Payment";
import Verfi from "./container/Verfi";



export default () =>
    <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/Exam" exact component={RegExam}/>
        <Route path="/payment" exact component={Payment}/>
        <Route paht="/verify" excact component={Verfi} />
    s */}


</Switch>;  