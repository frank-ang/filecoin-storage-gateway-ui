import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DataSet from './DataSet'

function DataSets (props) {

    return (
        <div>
            <Card>
                <Card.Header>
                    Data Sets
                </Card.Header>
                <Card.Body>
                    <DataSet/>
                    <DataSet/>
                    <Button variant="outline-primary" className="float-right">Get Data Sets</Button>

                </Card.Body>

                <Card.Footer className="text-muted">genre: curlybrace genre </Card.Footer>
            </Card>
        </div>
    )
}
export default DataSets