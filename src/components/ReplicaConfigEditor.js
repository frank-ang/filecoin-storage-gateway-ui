import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import SPCatalog from './SPCatalog';

function ReplicaConfigEditor() {

    const [replicaConfig, setReplicaConfig] = useState({
            replicaId:'1',
            size:'100 TiB',
            storageProvider:'',
            spid:'',
            location:'',
            estimatedFees:'',
    });

    const openSPCatalog = () => {
        console.log(`## ReplicaConfigEditor.openSPCatalog() !!`)
        handleShow();
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
                }}>
                    Configure Replica
                </Card.Header>
                <Card.Body>
                        <Form>
                            <Row style={{display: 'flex',justifyContent: 'left', alignContent: 'left' }}>
                                <Form.Label column sm={2}>
                                    Replica ID
                                </Form.Label>
                                <Col sm={3}>
                                    <Form.Control  plaintext readOnly defaultValue={replicaConfig.replicaId} />
                                </Col>
                                <Form.Label column sm={2}>
                                    Replica Size
                                </Form.Label>
                                <Col sm={3}>
                                    <Form.Control plaintext readOnly defaultValue={replicaConfig.size} />
                                </Col>
                            </Row>

                            <Row style={{display: 'flex',justifyContent: 'left', alignContent: 'left' }}>
                                <Form.Label column sm={2}>Storage Provider: </Form.Label>
                                <Col sm={5}>
                                    <Form.Control type="text" defaultValue={replicaConfig.storageProvider} />
                                </Col>
                                <Col sm={2}>
                                    <Button type="button" className="btn float-left" onClick={openSPCatalog}>Find SP...</Button>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>

                            <Row style={{display: 'flex',justifyContent: 'left', alignContent: 'left' }}>
                                <Form.Label column sm={2}>Location: </Form.Label>
                                <Col sm={3}>
                                    <Form.Control type="text" defaultValue={replicaConfig.location} />
                                </Col>
                                <Form.Label column sm={2}>Estimated Fees: </Form.Label>
                                <Col sm={2}>
                                    <Form.Control type="text"  defaultValue={replicaConfig.estimatedFees} />
                                </Col>
                            </Row>

                            <hr/>
                            <Row style={{display: 'flex',justifyContent: 'left', alignContent: 'left' }}>
                                <Col sm={7}>
                                </Col>
                                <Col sm={2}>
                                    <Button type="button" className="btn float-left">Save.</Button>
                                </Col>
                            </Row>
                        </Form>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} backdrop="static" dialogClassName="my-wide-modal" aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">Storage Provider Catalog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SPCatalog/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Compare Options
                </Button>

                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default ReplicaConfigEditor
