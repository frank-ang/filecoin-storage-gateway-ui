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
                            <Container fluid="true">
                                <Form>
                                    <Accordion className="m-2" activeKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Prepare Source</Accordion.Header>
                                            <Accordion.Body>
                                                <Container fluid="true">
                                                
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} className="mb-3" controlId="dataSetName">
                                                                <Form.Label>Data Set Name</Form.Label>
                                                                <Form.Control type="text" placeholder="Must be a unique name" />
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} className="mb-3" controlId="dataSetSourcePath">
                                                                <Form.Label>Source Path</Form.Label>
                                                                <Form.Control type="text" placeholder="e.g. s3://somebucket/somepath or mounted NFS path" />
                                                                <Button variant="outline-primary" className="float-right">Browse S3...</Button>

                                                        </Form.Group>
                                                        
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Col>                                        
                                                            Data Set Name: , Source Data type: ( S3 path, NFS path). Advanced data replication setting,.
                                                        </Col>
                                                    </Row>
                                                </Container>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Data Replication Policy</Accordion.Header>
                                            <Accordion.Body>
                                                [ Replication Table ... ] add remove rows. [ SP Catalog search filter ]
                                                <Accordion.Item>
                                                    <Accordion.Header>Sub-accordion Item</Accordion.Header>
                                                    <Accordion.Body>
                                                    </Accordion.Body>
                                                </Accordion.Item>
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
                            </Container>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );

}

export default DataSetConfigEditor;