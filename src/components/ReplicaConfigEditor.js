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
            replicaId:'0',
            size:'100 TiB',
            storageProvider:'Select an SP',
            spid:'Select an SP ID',
            location:'location here',
            estimatedFees:'fees here',
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
                        </Form>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title"
>
                <Modal.Header closeButton id="example-custom-modal-styling-title">
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                    <SPCatalog/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default ReplicaConfigEditor
