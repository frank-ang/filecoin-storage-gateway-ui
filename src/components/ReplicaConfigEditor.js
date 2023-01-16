import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

function ReplicaConfigEditor() {
    const [replicaConfig, setReplicaConfig] = useState({
            replicaId:'new',
            size:'size here',
            storageProvider:'Select an SP',
            spid:'Select an SP ID',
            location:'location here',
            estimatedFees:'fees here',
    });

    const openSPCatalog = () => {
        console.log(`## ReplicaConfigEditor.openSPCatalog() !!`)
    }

    useEffect(() => {
        console.log(`#### ReplicaConfigEditor.useEffect(). config:${JSON.stringify(replicaConfig)}}`)
    }, [replicaConfig]);

    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Header style={{
                    display: 'flex',
                    alignItems: 'left',
                    justifyContent: 'left',
                }}>Configure Replica</Card.Header>
                <Card.Body>
                    <Container fluid="true">
                        <Form>

                            <Form.Group as={Row} style={{ textAlign: "left" }} className="mb-3" controlId="replicaConfig1">                        
                                <Col>
                                    <Form.Label column sm="10">Replica ID: </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control plaintext readOnly defaultValue={replicaConfig.replicaId} />
                                </Col>
                                <Col>
                                    <Form.Label column sm="10">Replica Size: </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control plaintext readOnly defaultValue={replicaConfig.size} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} style={{ textAlign: "left" }} className="mb-3" controlId="replicaConfig2">                        
                                <Col>
                                    <Form.Label column sm="10">Storage Provider: </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control plaintext readOnly defaultValue={replicaConfig.storageProvider} />
                                </Col>
                                <Col>
                                    <Form.Label column sm="10">SP Catalog</Form.Label>
                                </Col>
                                <Col>
                                    <Button type="button" className="btn" onClick={openSPCatalog}>+Add</Button>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} style={{ textAlign: "left" }} className="mb-3" controlId="replicaConfig3">                        
                                <Col>
                                    <Form.Label column sm="10">Location: </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control plaintext readOnly defaultValue={replicaConfig.location} />
                                </Col>
                                <Col>
                                    <Form.Label column sm="10">Estimated Fees: </Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control plaintext readOnly defaultValue={replicaConfig.estimatedFees} />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ReplicaConfigEditor
