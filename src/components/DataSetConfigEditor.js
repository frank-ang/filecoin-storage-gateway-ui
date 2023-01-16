import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import ReplicaConfigSet from './ReplicaConfigSet';

function DataSetConfigEditor({dataSetConfig}) {

    const [activeKey, setActiveKey] = useState(0);
    const [replicaConfigSet, setReplicaConfigSet] = useState([]);

    useEffect(() => {
        console.log(`#### DataSetConfigEditor.useEffect(). activeKey:${JSON.stringify(activeKey)}}`)
    }, [dataSetConfig, replicaConfigSet]);

    async function openAccordion(event) {
        console.log(`### DataSetConfigEditor.openAccordion(). event: (${JSON.stringify(event)}, activeKey:${JSON.stringify(activeKey)}.`);
        setActiveKey(event)
    }

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
                            <Accordion className="m-2" defaultActiveKey={activeKey} onSelect={openAccordion}> 
                                <Form>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Prepare Source</Accordion.Header>
                                        <Accordion.Body>
                                            <Container fluid="true" className="accordion-collapse collapse show">
                                            
                                                <Row className="mb-3">
                                                    <Form.Group as={Row} className="mb-3" controlId="dataSetName">
                                                        <Col>
                                                            <Form.Control type="text" placeholder="Unique Data Set Name" />
                                                        </Col>
                                                        <Col>
                                                            <Form.Control type="text" placeholder="Path of Source Data (S3 or NFS)" />
                                                        </Col>
                                                        <Col>
                                                            <Button type="button" variant="primary" className="float-right">Select S3 path...</Button>{' '}
                                                        </Col>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Row} className="mb-3" controlId="advancedPrep">
                                                        <Col>
                                                            <Form.Check type="checkbox" label="Advanced Data Preparation Settings?" />
                                                        </Col>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3" >
                                                    <Form.Group as={Row} className="mb-3" >
                                                        <Col>
                                                            <Form.Check type="switch" label="Encrypt" />
                                                        </Col>
                                                        <Col>
                                                                <Form.Check label="GpG"/>
                                                                <Form.Check label="RSA" disabled />
                                                        </Col>
                                                        <Col>
                                                            <Form.Label>Select key material from:</Form.Label>
                                                        </Col>
                                                        <Col>
                                                            <Button variant="primary" className="float-right">AWS Secrets Manager</Button>{' '}
                                                        </Col>
                                                        <Col>
                                                            <Button variant="primary" className="float-right">Hashicorp Vault® </Button>{' '}
                                                        </Col>
                                                    </Form.Group>
                                                </Row>
                                            </Container>

                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1" className="accordion-collapse collapse show" >
                                        <Accordion.Header>Replica Configuration Set</Accordion.Header>
                                        <Accordion.Body>
                                            <ReplicaConfigSet replicaConfigSet={replicaConfigSet} />
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2" className="accordion-collapse collapse show" >
                                        <Accordion.Header>More configuration... </Accordion.Header>
                                        <Accordion.Body>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3" className="accordion-collapse collapse show" >
                                        <Accordion.Header>Confirmation</Accordion.Header>
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
                                </Form>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
}

export default DataSetConfigEditor;