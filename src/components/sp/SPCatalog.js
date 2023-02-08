import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SPCatalog() {

    useEffect(() => {
        console.log(`#### SPCatalog.useEffect().`)
    }, []);

    const [catalog, setCatalog] = useState([
        {
            spBusinessId:'0',
            spName:'Test SP',
            minerId: 't01000',
            minerLocation:'localhost',
            feeTiBMonth:'USD $19.99',
        },
        {
            spBusinessId:'1',
            spName:'Piknik',
            minerId: 't01001',
            minerLocation:'San Diego, CA, United States',
            feeTiBMonth:'USD $20.10',
        },
        {
            spBusinessId:'2',
            spName:'Greater Heat',
            minerId: 't01002',
            minerLocation:'Dallas, Texas, United States',
            feeTiBMonth:'USD $20.09',
        },
        {
            spBusinessId:'3',
            spName:'Greater Heat',
            minerId: 't01003',
            minerLocation:'Singapore, Republic of Singapore',
            feeTiBMonth:'USD $20.11',
        },
        {
            spBusinessId:'4',
            spName:'Distributed Storage Systems',
            minerId: 't01004',
            minerLocation:'Sydney, NSW, Australia',
            feeTiBMonth:'USD $20.09',
        },
        {
            spBusinessId:'5',
            spName:'FilSwan',
            minerId: 't01005',
            minerLocation:'Toronto, Ontario, Canada',
            feeTiBMonth:'USD $20.10',
        },
        {
            spBusinessId:'6',
            spName:'Twin Quasar',
            minerId: 't01006',
            minerLocation:'Paris, France',
            feeTiBMonth:'USD $20.11',
        }

    ]);

    return(
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Header style={{
                    display: 'flex',
                    alignItems: 'left',
                    justifyContent: 'left',
                }}>
                    Storage Provider Catalog
                </Card.Header>
                <Card.Body>
                    <Container fluid="true" className="accordion-collapse collapse show">
                        <Form.Group as={Row} className="mb-3" controlId="dataSetName">
                            <Col>
                                <Form.Control type="text" placeholder="Search..." />
                            </Col>
                            <Col>
                                <Button type="button" variant="primary" className="float-right">Search</Button>{' '}
                            </Col>
                            <Col>
                                [Other filter controls here]
                            </Col>
                        </Form.Group>
                    </Container>
                    <Table striped="columns" bordered hover responsive className="selectableTable">
                        <thead>
                            <tr>
                                <th>Storage Provider</th>
                                <th>SP ID</th>
                                <th>Location</th>
                                <th>Storage Fee 
                                    <br/>(TiB/Month)</th>
                                <th>Score</th>
                                <th>Compare</th>
                                <th>Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {catalog.map((sp, index) => (
                                <tr key={index}>
                                    <td><a href="#">{sp.spName}</a></td>
                                    <td>{sp.minerId}</td>
                                    <td>{sp.minerLocation}</td>
                                    <td>{sp.feeTiBMonth}</td>
                                    <td></td>
                                    <td>
                                        <Form.Check type="checkbox" />
                                    </td>
                                    <td>
                                    <Button variant="primary">
                                        Select
                                    </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    [ &lt;&lt; Page 1 of 1  &gt;&gt;]
                </Card.Body>
            </Card>


        </div>
    )
}
export default SPCatalog