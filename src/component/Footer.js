import React from "react";
import { Col, Container, Image, Placeholder, Row } from "react-bootstrap";
import logo from "../img/logw.png";
const Footer = () => {
  return (
    <div className="p-4 bg-dark text-white">
      <Row>
        <Col className="pb-4"  xs={12} md={5}>
          <Image src={logo} className="mb-3" />
          <p style={{ fontSize: "20px" }}>
            Non-disclosure agreement seed round seed money accelerator
            influencer. Growth hacking return nondis sure agreement .
          </p>
          <div className="d-flex justify-content-evenly">
            <i class="bi bi-facebook "></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-twitter-x"></i>
          </div>
        </Col>
       <Col >
       <Row >
       <Col  className="pb-4" xs={12} md={4} >
          <h5 className="mb-4">About Production</h5>
          <a
            href="#"
            className="list-group-item list-group-item-action text-secondary mb-2 fs-5"
          >
            Patch
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-secondary mb-2 fs-5"
          >
            Updates
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-secondary mb-2 fs-5"
          >
            Beta test
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-secondary mb-2 fs-5"
          >
            Pricing Product
          </a>
        </Col>
        <Col className="pb-4" xs={12} md={4} >
          <h5 className="mb-4">Help and Solution</h5>
          <a
            href="#"
            className="list-group-item list-group-item-action text-secondary mb-2 fs-5"
          >
            Talk to support
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-secondary mb-2 fs-5"
          >
            Support docs
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-secondary mb-2 fs-5"
          >
            System status
          </a>
        </Col>
        <Col className="pb-4" xs={12} md={4} >
          <h5 className="mb-4">Support</h5>
          <a
            href="#"
            className="list-group-item list-group-item-action text-secondary mb-2 fs-5"
          >
            Help center
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-secondary mb-2 fs-5"
          >
            Account information
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-secondary mb-2 fs-5"
          >
            About
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-secondary mb-2 fs-5"
          >
            Contact Us
          </a>
        </Col>{" "}
       </Row>
       </Col>
      </Row>
    </div>
  );
};

export default Footer;
