import React, { useState } from 'react';
import data from './verbs.json';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Grammar = () => {
  const [selectedVerb, setSelectedVerb] = useState(data.verbs[0].infinitive);

  const handleVerbClick = (infinitive) => {
    setSelectedVerb(infinitive);
  };

  return (
    <Container style={{ marginTop: '100px' }}>
      <Row className='mt-5 text-center'>
        {data.verbs.map((verb) => (
          <Col xs={3} sm={3} md={3} lg={2} xl={2} key={verb.infinitive} className='mb-3'>
            <Button
              className='w-100'
              variant={verb.infinitive === selectedVerb ? 'success' : 'outline-success'}
              onClick={() => handleVerbClick(verb.infinitive)}>
              {verb.infinitive}
            </Button>
          </Col>
        ))}
      </Row>
      {selectedVerb && (
        <div className='text-center'>
          <h2>{selectedVerb}</h2>
          <Table bordered hover className='w-50 mx-auto'>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Infinitiv</th>
                <th>Partizip II</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data.verbs.find((verb) => verb.infinitive === selectedVerb).conjugations).map(
                ([subject, [infinitiv, partizipII]]) => (
                  <tr key={subject}>
                    <td>{subject}</td>
                    <td>{infinitiv}</td>
                    <td>{partizipII}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default Grammar;
