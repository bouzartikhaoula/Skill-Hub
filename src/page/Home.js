import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import image1 from "../img/imag1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4A.png";
import image5 from "../img/image4g.png";

import iconFolder from "../img/iconFolder.png";
import Data from "../data/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CoursSlide from "../component/CoursSlide";

const Home = () => {
  //to add the slid in react
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Container>
      {/* section 1 */}
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
      {/* section 2 */}
      <div className="row pb-4">
        <div className="col-lg-6">
          <Image className="w-100 " src={image2} />
        </div>
        <div className="col-lg-6 align-content-center ps-5">
          <h1 className="mb-4" style={{ fontSize: "60px" }}>
            Over 1M+ Students get’s job
          </h1>
          <p className="mb-4" style={{ fontSize: "20px" }}>
            Non-disclosure agreement seed round seed money accelerator
            influencer. Growth hacking return nondis sure.
          </p>
          <p className="mb-4" style={{ fontSize: "20px" }}>
            Non-disclosure agreement seed round seed money accelerator
            influencer.
          </p>
          <Button className="p-3 pe-5 ps-5" type="submit">
            Explore More
          </Button>
        </div>
      </div>
      {/* section 3 */}
      <section className="nonborder">
        <div className="text-center mt-5">
          <h1 style={{ fontSize: " 60px" }}>How it works</h1>
          <p style={{ fontSize: " 20px" }}>
            Non-disclosure agreement seed round seed money <br /> accelerator
            influencer.
          </p>
        </div>
        <Row className="pt-5 mt-5">
          <Col xs lg="6" sm="12">
            <Card className="startCard">
              <Card.Body>
                <Row>
                  <Col xs={1}>
                    <Card.Img className="icon pt-2" src={iconFolder} />
                  </Col>

                  <Col>
                    <Card.Title style={{ fontSize: "40px" }}>
                      Select a course
                    </Card.Title>
                    <Card.Text className="pt-3 pb-3">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mt-4">
              <Card.Body>
                <Row>
                  <Col xs={1}>
                    <Card.Img className="icon pt-2" src={iconFolder} />
                  </Col>

                  <Col>
                    <Card.Title style={{ fontSize: "40px" }}>
                      Select a course
                    </Card.Title>
                    <Card.Text className="pt-3 pb-3">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mt-4">
              <Card.Body>
                <Row>
                  <Col xs={1}>
                    <Card.Img className="icon pt-2" src={iconFolder} />
                  </Col>

                  <Col>
                    <Card.Title style={{ fontSize: "40px" }}>
                      Select a course
                    </Card.Title>
                    <Card.Text className="pt-3 pb-3">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs lg="6" sm="12">
            <Image className="w-100" src={image3} />
          </Col>
        </Row>
      </section>
      {/* section 4 */}
      <section className="pb-4">
        <div className="text-center mt-5">
          <h1 style={{ fontSize: " 60px" }}>Our popular courses</h1>
          <p style={{ fontSize: " 20px" }}>
            Non-disclosure agreement seed round seed <br /> money accelerator
            influencer.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {Data.map((item) => (
              <CoursSlide key={item.id} {...item} />
            ))}
          </Slider>{" "}
        </div>
      </section>
      {/* section 5 */}
      <section className="mt-5 mb-5">
        <Row>
          <Col xs lg="5">
            <Image className="w-100 " src={image4} />
          </Col>
          <Col className="align-self-center row">
            <div className="col-lg-8 align-self-center">
              <h1 style={{fontSize: "38px"}}>Do you have any query?</h1>
            <p style={{fontSize: "20px"}}>Non-disclosure agreement seed.</p>
              <Form inline>
        <Row>
          <Col xs="auto" >
            <Form.Control 
              type="text"
              placeholder="Search"
              className=" Searchbar mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
            </div>
            <div className="col-lg-4">
              <Image className="w-100 "  src={image5} />
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Home;
