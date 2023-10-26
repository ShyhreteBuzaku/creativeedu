import React from 'react';
import data from './data.json';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Details = () => {
    const { id } = useParams();
    const lesson = data.find(lesson => lesson.id === id);
  
    if (!lesson) {
      return <div>Lesson not found</div>;
    }
  
    return (
      <div>
          
        <Container>
            <Row style={{textAlign:"center", marginTop:"100px"}}>
                <Alert key={"success"} variant={"success"}>
                    <div style={{display:"flex", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
                        <img src="/germany.png" height={"25px"} style={{paddingBottom:"5px"}}/> &nbsp;
                        <h3>{lesson.titleDe}</h3>
                    </div>
                    <div style={{display:"flex", alignItems:"center", alignContent:"center", justifyContent:"center"}}>
                        <img src="/united-states.png" height={"25px"} style={{paddingBottom:"5px"}}/> &nbsp;
                        <h3>{lesson.titleEn}</h3>
                    </div>
                </Alert>
            </Row>
            <Row>
            {lesson.details.map(detail => (
                <Col md={4} className='my-4' key={detail.id}>
                    <Card>
                        <Card.Img variant="top" src={detail.img} />
                        <Card.Body>
                            <Card.Title>
                                <div style={{display:"flex", alignItems:"center", alignContent:"center"}}>
                                    <img src="/germany.png" height={"25px"} style={{paddingBottom:"5px"}}/> &nbsp;
                                    <h3>{detail.titleDe}</h3>
                                </div>
                                </Card.Title>
                            <Card.Text>
                                <div style={{display:"flex", alignItems:"center", alignContent:"center"}}>
                                    <img src="/united-states.png" height={"25px"} style={{paddingBottom:"5px"}}/>&nbsp;
                                    <h5>{detail.titleEn}</h5>
                                </div>
                                <p>{detail.description}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Details;
