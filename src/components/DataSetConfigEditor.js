import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function DataSetConfigEditor({dataSetConfig}) {

    useEffect(() => {
      }, [dataSetConfig]);

    return(
        <div>
            <Container>
                <Row className="m-2">
                    <Card style={{ width: '100%' }}>
                        <Card.Header style={{
                            display: 'flex',
                            alignItems: 'left',
                            justifyContent: 'left',
                        }}>Data Set Configuration Wizard</Card.Header>
                        <Card.Body>
                            <Form>
                                <Accordion className="m-2">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Prepare Source</Accordion.Header>
                                        <Accordion.Body>
                                            <Container fluid="true">
                                            
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} className="mb-3" controlId="dataSetName">
                                                            <Form.Control type="text" placeholder="Unique Data Set Name" />
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} className="mb-3" controlId="dataSetSourcePath">
                                                            <Form.Control type="text" placeholder="Path of Source Data (S3 or NFS)" />
                                                            <Button variant="primary" className="float-right">Select S3 path...</Button>{' '}

                                                    </Form.Group>
                                                    
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group className="mb-3" controlId="advancedPrep">
                                                        <Form.Check type="checkbox" label="Advanced Data Preparation Settings" />
                                                    </Form.Group>
                                                </Row>
                                            </Container>

                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Data Replication Policy</Accordion.Header>
                                        <Accordion.Body>
                                            [ Replication Table ... ] add remove rows. [ SP Catalog search filter ]


                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Configure more shit</Accordion.Header>
                                        <Accordion.Body>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Confirm</Accordion.Header>
                                        <Accordion.Body>

                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="I agree to sell my eternal soul." />
                                            </Form.Group>

                                            <Table striped="columns" bordered hover responsive className="selectableTable">
                                                <thead>
                                                    <tr>
                                                        <th>1</th>
                                                        <th>2</th>
                                                        <th>3</th>
                                                        <th>4</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr style={{ textAlign: "left" }}>
                                                        <td>Foo</td>
                                                        <td>value here</td>
                                                        <td>value here</td>
                                                        <td>value here</td>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );

}

export default DataSetConfigEditor;