import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import ReplicaConfigSet from './repl/ReplicaConfigSet';

function DataSetConfigEditor() {

    const [activeKey, setActiveKey] = useState("0");
    const [dataSetConfig, setDataSetConfig] = useState([
            {   // TODO: refactor struct. should be nested struct: DataSetConfig.ReplicaConfigSet
                replicaId:'8',
                size:'888 TiB',
                storageProvider:'Origin Storage',
                spid:'t01000',
                location:'Singapore',
                estimatedFees:'USD $280.88',
            }
    ]);
    const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

    useEffect(() => {
        console.log(`#### DataSetConfigEditor useEffect() activeKey:${JSON.stringify(activeKey)}}`)
    }, []);

    function openAccordion(event) {
        console.log(`### DataSetConfigEditor openAccordion() event: (${JSON.stringify(event)}, activeKey:${JSON.stringify(activeKey)}.`);
        setActiveKey(event)
    }

    const toggleAdvancedOptions = event => {
        console.log(`### DataSetConfigEditor toggleAdvancedOptions(), current showAdvancedOptions: (${JSON.stringify(showAdvancedOptions)}.`);
        setShowAdvancedOptions(current => !current);
    };

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
                                                            <Button type="button" variant="primary" className="float-right" disabled>Select S3 path...</Button>{' '}
                                                        </Col>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Row} className="mb-3" controlId="advancedPrep">
                                                        <Col>
                                                            <Form.Check type="checkbox" label="Advanced Data Preparation Settings?" onClick={toggleAdvancedOptions}/>
                                                        </Col>
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3" >
                                                    { showAdvancedOptions && 
                                                        <Form.Group as={Row} className="mb-3" disabled>
                                                            <Col>
                                                                <Form.Check type="switch" label="Encrypt" />
                                                            </Col>
                                                            <Col>
                                                                    <Form.Check label="GpG" disabled/>
                                                                    <Form.Check label="RSA" disabled/>
                                                            </Col>
                                                            <Col>
                                                                <Form.Label>Select key material from:</Form.Label>
                                                            </Col>
                                                            <Col>
                                                                <Button variant="primary" disabled className="float-right">AWS Secrets Manager</Button>{' '}
                                                            </Col>
                                                            <Col>
                                                                <Button variant="primary" disabled className="float-right">Hashicorp Vault® </Button>{' '}
                                                            </Col>
                                                        </Form.Group>
                                                    }
                                                </Row>
                                            </Container>

                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1" className="accordion-collapse collapse show" >
                                        <Accordion.Header>Replica Configuration Set</Accordion.Header>
                                        <Accordion.Body>
                                            <ReplicaConfigSet dataSetConfig={dataSetConfig} />
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2" className="accordion-collapse collapse show" >
                                        <Accordion.Header>Advanced configuration. </Accordion.Header>
                                        <Accordion.Body>
                                                expert mode stuff
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3" className="accordion-collapse collapse show" >
                                        <Accordion.Header>Cost Esimation &amp; Confirmation</Accordion.Header>
                                        <Accordion.Body>

                                            <Table striped="columns" bordered hover responsive className="selectableTable">
                                                <thead>
                                                    <tr>
                                                        <th width='30%'>Item</th>
                                                        <th width='20%'>Estimated Cost <sup>*</sup></th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr style={{ textAlign: "left" }}>
                                                        <td>Filecoin Storage Deal fee estimate<sup>**</sup></td>
                                                        <td>$1000</td>
                                                        <td>Cost Summary for your [N] TiB <a href="#">Data replication plan</a></td>
                                                    </tr>
                                                    <tr style={{ textAlign: "left" }}>
                                                        <td>Filecoin Retrieval Deal Fees estimate<sup>***</sup></td>
                                                        <td>USD$1000</td>
                                                        <td>Cost Summary for your [N] TiB <a href="#">Data retrieval plan</a></td>
                                                    </tr>
                                                    <tr style={{ textAlign: "left" }}>
                                                        <td>Grand Prix Network optimization Add-on</td>
                                                        <td>USD$1000</td>
                                                        <td>Estimated savings of: USD$[big bucks] on AWS Data Transfer egress costs. To replicate the dataset to [R] participating SPs. <a href="#">Calculation here.</a></td>
                                                    </tr>
                                                    <tr style={{ textAlign: "left" }}>
                                                        <td>Estimated Filecoin Storage Gateway software usage cost.</td>
                                                        <td>USD$0</td>
                                                        <td>Free.</td>
                                                    </tr>
                                                    <tr style={{ textAlign: "left" }}>
                                                        <td>Estimated AWS EC2 costs for Filecoin Storage Gateway, month 1</td>
                                                        <td>USD$1234.88</td>
                                                        <td>Assumes 24/7 usage during month 1 for data prep and replication on 1x r5.Xxlarge instance in US Ohio. 
                                                            <br/>Reduces to $200 per month by downsizing to r5.medium instance size.
                                                        </td>
                                                    </tr>
                                                    <tr style={{ textAlign: "left" }}>
                                                        <td>Estimated AWS Data Transfer Egress fees</td>
                                                        <td>USD$7,987.20</td>
                                                        <td>Estimated savings of: USD$[big bucks] on AWS Data Transfer egress costs. To replicate the dataset to [R] participating SPs. 
                                                        For illustration, AWS Data Transfer egress fees for 100 TiB in a month:
                                                            <ul>
                                                                <li>
                                                                    <a href="https://calculator.aws/#/estimate?id=6aac790e80874dec1fb6fc5336d54809fcebd6bf">US Ohio 7,987.20 USD</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://calculator.aws/#/estimate?id=b39338fa7afce8338a26cb721782699471b5ea9c">Asia Singapore 8,908.80 USD</a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Form.Group as={Row} style={{ textAlign: "left" }} className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="I have read and acknowledge the Cost Estimates."/>
                                                <Form.Check type="checkbox" label="I agree to the Storage Gateway Terms and Conditions."/>
                                            </Form.Group>
                                            <Form.Group as={Row} style={{ textAlign: "left"}} className="mb-3" controlId="formBasicCheckbox">
                                                <Button as={Col} type="button" variant="primary" className="btn btn-primary float-left">Select Wallet Funding</Button> &nbsp;
                                                <Button as={Col} type="button" variant="primary" className="btn btn-primary float-right" disabled>Continue</Button>
                                            </Form.Group>

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