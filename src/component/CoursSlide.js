import React from 'react'
import {  Card, Col } from 'react-bootstrap'
import etoile from "../img/Etoile.png"
const coursSlide = ({titel,imgUrl,price,vue}) => {
  return (
<Col xs lg="4">
<Card className='p-4'>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title> {titel} </Card.Title>
      <div className='d-flex justify-content-between'>
      <Card.Img  variant="top" style={{maxWidth:"45%"}} src={etoile} />
      <Card.Text> {price} </Card.Text>
      </div>
      <Card.Text> {vue} </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default coursSlide