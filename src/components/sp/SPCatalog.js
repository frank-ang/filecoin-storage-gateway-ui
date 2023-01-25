import React, { useState, useEffect } from 'react';
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
            feeTiBMonth:'USD $1.99',
        },
        {
            spBusinessId:'1',
            spName:'Piknik',
            minerId: 't01001',
            minerLocation:'San Diego, CA, United States',
            feeTiBMonth:'USD $2.35',
        },
        {
            spBusinessId:'2',
            spName:'Greater Heat',
            minerId: 't01002',
            minerLocation:'Dallas, Texas, United States',
            feeTiBMonth:'USD $1.99',
        },
        {
            spBusinessId:'3',
            spName:'Greater Heat',
            minerId: 't01003',
            minerLocation:'Singapore, Republic of Singapore',
            feeTiBMonth:'USD $2.55',
        },
        {
            spBusinessId:'4',
            spName:'Distributed Storage Systems',
            minerId: 't01004',
            minerLocation:'Sydney, NSW, Australia',
            feeTiBMonth:'USD $2.02',
        },
        {
            spBusinessId:'5',
            spName:'FilSwan',
            minerId: 't01005',
            minerLocation:'Toronto, Ontario, Canada',
            feeTiBMonth:'USD $2.21',
        },
        {
            spBusinessId:'6',
            spName:'Twin Quasar',
            minerId: 't01006',
            minerLocation:'Paris, France',
            feeTiBMonth:'USD $2.42',
        }

    ]);

    return(
        <div>
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

        </div>
    )
}
export default SPCatalog