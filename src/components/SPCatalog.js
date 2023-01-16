import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function SPCatalog() {

    useEffect(() => {
        console.log(`#### SPCatalog.useEffect().`)
    }, []);

    const [catalog, setCatalog] = useState([
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
            spName:'Distributed Storage Systems',
            minerId: 't01000',
            minerLocation:'Sydney, NSW, Australia',
            feeTiBMonth:'USD $2.02',
        },
        {
            spBusinessId:'4',
            spName:'FilSwan',
            minerId: 't01003',
            minerLocation:'... Canada',
            feeTiBMonth:'USD $2.21',
        },
        {
            spBusinessId:'5',
            spName:'Twin Quasar',
            minerId: 't01003',
            minerLocation:'... Europe',
            feeTiBMonth:'USD $2.42',
        }

    ]);

    return(
        <div>
            <Table striped="columns" bordered hover responsive className="selectableTable">
                <thead>
                    <tr>
                        <th>Storage Provider</th>
                        <th>SP Miner ID</th>
                        <th>SP Location</th>
                        <th>feeTibMonth</th>
                        <th>Reputation</th>
                        <th>Compare</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {catalog.map((sp, index) => (
                        <tr key={index}>
                            <td>{sp.spName}</td>
                            <td>{sp.minerId}</td>
                            <td>{sp.minerLocation}</td>
                            <td>{sp.feeTiBMonth}</td>
                            <td>loading...</td>
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