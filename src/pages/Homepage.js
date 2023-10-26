import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';
import { Link } from 'react-router-dom'; 

const Homepage = () => {
  return (
    <div>
        <Container>
            <Row className='mt-5'>
                {
                    data.map((d)=>{
                        return(
                            <Col md={6} className='mt-5'>
                                <Card>
                                    <Card.Header>{d.lesson}</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                                <Card.Title>{d.titleDe}</Card.Title>
                                                <Card.Text>
                                                    {d.titleEn}
                                                </Card.Text>
                                                <Link to={`/details/${d.id}`}>
                                                    <Button variant="success">Learn more</Button>
                                                </Link>
                                            </Col>
                                            <Col>
                                                <img src={d.img} style={{maxWidth:"100%"}}/>
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

export default Homepage