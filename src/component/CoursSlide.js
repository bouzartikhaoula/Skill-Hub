import React from "react";
import { Card, Col } from "react-bootstrap";
import etoile from "../img/Etoile.png";
const coursSlide = ({ titel, imgUrl, price, vue }) => {
  return (
    <div className="ms-3">
      <Card className="p-4">
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title> {titel} </Card.Title>
          <div className="row">
            <div className="col-lg-6">
              {" "}
              <Card.Img
             
                src={etoile}
              />
            </div>
            <div className="col-lg-6 text-center">
              <Card.Text> {price} </Card.Text>
            </div>
          </div>
          <Card.Text> {vue} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default coursSlide;
