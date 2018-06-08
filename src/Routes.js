import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home"
import RegExam from  "./container/RegExam"
import Payment from "./container/Payment";
import Verfi from "./container/Verfi";
import StartExam from "./container/StartExam";
import Exam from "./container/Exam";
import ExamFinish from "./container/ExamFinish";
import DashBoard from "./container/DashBoard";
import ASremlCer from "./container/ASremlCer";
import BICer from "./container/BICer";
import GenStatCer from "./container/GenStatCer";

export default () =>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/GenStatCer"  exact component={GenStatCer}/> 
        <Route path="/ASremlCer"  exact component={ASremlCer}/> 
        <Route path="/BICer"  exact component={BICer}/> 
        <Route path="/finish" exact component={ExamFinish}/>
        <Route path="/cerfiexams" exact component={Exam}/>
        <Route path="/Exam" exact component={RegExam}/>
        <Route path="/payment" exact component={Payment}/>
        <Route path="/noties" exact component={StartExam}/>
        <Route path="/dashboard" exact component={DashBoard}/>
        <Route paht="/verify" excact component={Verfi} />
        
      

</Switch>;  