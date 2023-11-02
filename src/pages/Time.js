import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './time.json';
import { Link } from 'react-router-dom'; 

const Time = () => {
  return (
    <div>
        <Container>
            <Row className='mt-5'>
                {
                    data.items.map((d)=>{
                        return(
                            <Col xs={6} sm={6} md={4} className='mt-5'>
                                <Card>
                                    <Card.Header className='text-center fw-bold'>{d.title}</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                                <img src={d.image} style={{maxWidth:"100%", maxHeight:"100px"}}/>
                                                <Card.Text className='mt-3'>
                                                    <b>{d.description}</b>
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    </div>
  )
}

export default Time