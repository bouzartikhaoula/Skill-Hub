import React from "react";
import { Col, Container, Image, Placeholder, Row } from "react-bootstrap";
import logo from "../img/logw.png"
const Footer = () => {
  return (
    <Container className="bg-dark text-white"  >
    <Row>
    <Col xs={12} md={6}>
        <Image src={logo} />
        <p>Non-disclosure agreement seed round seed money accelerator influencer. Growth hacking return nondis sure agreement .</p>
        <div className="d-flex">
        <i class="bi bi-facebook">hh</i>
        </div>
        </Col>
        <Col xs={12} md={3}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={3}>
          xs=6 md=4
        </Col>
    </Row>
    </Container>
    
  );
};

export default Footer;
