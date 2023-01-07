import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DataSet from './DataSet'

function DataSets (props) {
    const apiName = 'FortuneApi';
    const host = 'localhost:7001';
    const path = '/preparations';

    useEffect(() => { }); // no-op.
    async function getPreparations(e) {
        e.preventDefault();
        console.log('Getting preparations.');
        const response = await fetch(`${path}`, { method: 'GET' });
        const myJson = await response.json(); //extract JSON from the http response
        console.log(myJson);
    }

    return (
        <div>
            <Card>
                <Card.Header>
                    Data Sets
                </Card.Header>
                <Card.Body>
                    <DataSet/>
                    <DataSet/>
                    <Button variant="outline-primary" className="float-right" onClick={getPreparations}>Get Preparations</Button>

                </Card.Body>

                <Card.Footer className="text-muted">genre: curlybrace genre </Card.Footer>
            </Card>
        </div>
    )
}
export default DataSets