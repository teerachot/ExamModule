import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home"
import RegExam from  "./container/RegExam"



export default () =>
    <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/Exam" exact component={RegExam}/>     
</Switch>;  