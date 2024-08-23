import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import image1 from "../img/imag1.png";
import image2 from "../img/image2.png";

const Home = () => {
  return (
    <Container>
      <div className="row pt-3">
        <div className="col-lg-6">
          <h3 className="greentext mb-4">Grow yourself with us</h3>
          <h1 className="mb-4" style={{ fontSize: "60px" }}>
            Grow your skill & get world class job’s
          </h1>
          <p className="mb-4" style={{ fontSize: "20px" }}>
            Non-disclosure agreement seed round seed money accelerator
            influencer. Growth hacking return nondis sure agreement seed round
            seed .
          </p>
          <Row className="mt-4">
            <Col xs="auto" className="Search ">
              <Form.Control
                type="text"
                placeholder="Search"
                className="Searchbar mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </div>
        <div className="col-lg-6">
          <Image className="w-100 " src={image1} />
        </div>
      </div>
      <div className="row pb-4">
        <div className="col-lg-6">
          <Image className="w-100 " src={image2} />
        </div>
        <div className="col-lg-6 align-content-center ps-5">
          <h1 className="mb-4" style={{ fontSize: "60px" }}>
            Over 1M+ Students get’s job
          </h1>
          <p className="mb-4" style={{ fontSize: "20px" }}>
          Non-disclosure agreement seed round seed money accelerator influencer. Growth hacking return nondis sure .
          </p>
          <p className="mb-4" style={{ fontSize: "20px" }}>
          Non-disclosure agreement seed round seed money accelerator influencer.
          </p>
          <Button className="p-3 pe-5 ps-5" type="submit">Explore More</Button>

        </div>
      </div>
    </Container>
  );
};

export default Home;
