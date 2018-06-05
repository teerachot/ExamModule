import React, { Component,Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">MMA</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Fragment>
              <LinkContainer to="/">
                  <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/Exam">
                  <NavItem>Exam</NavItem>
                </LinkContainer>
              </Fragment>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
