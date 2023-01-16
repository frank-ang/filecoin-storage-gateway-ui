import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Replication({datasetId}) {

    useEffect(() => {
      }, [datasetId]);

    return(
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Header style={{
                    display: 'flex',
                    alignItems: 'left',
                    justifyContent: 'left',
                }}>Data Set Replication</Card.Header>
                <Card.Body>
                    <Container fluid="true">
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
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );

}

export default Replication;