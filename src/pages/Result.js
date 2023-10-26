import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Result = () => {
  return (
    <Container>
      <Row style={{textAlign:"center", marginTop:"40px"}}>
        <Col xs={12} md={12}>
          <h1>"SEHR GUT"</h1>
        </Col>
        <Col xs={12} md={12}>
          <h3>Because, We are not problematic guys!</h3>
        </Col>
        <Col xs={12} md={12}>
          <Image src="/Hashim-Thaci.jpeg" />
        </Col>
      </Row>
    </Container>
  )
}

export default Result