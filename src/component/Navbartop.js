import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Image } from "react-bootstrap";
import logo from "../img/logo.png"

const Navbartop = () => {
 

  return (
    <>
      <Navbar className="mt-4 mb-5"  expand="lg">
        <Container>
          <Nav.Link className="navbar-brand" as={NavLink} to="/" href="#home">
          <Image src={logo} rounded />
          </Nav.Link>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto ">
              <Nav.Link  className="pe-5" as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="pe-5" as={NavLink} to="/aboutUS">
              About US
              </Nav.Link> <Nav.Link className="pe-5" as={NavLink} to="/courses">
              Courses
              </Nav.Link> <Nav.Link className="pe-5" as={NavLink} to="/resources">
              Resources
              </Nav.Link> <Nav.Link className="pe-5" as={NavLink} to="/onlineLearning">
              Online Learning
              </Nav.Link>
            </Nav>  
            <Button >Log In</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbartop