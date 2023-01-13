import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'

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
                                    <th>id</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                </tr>
                            </thead>
                            <tbody>
                                datasetId : ${JSON.stringify(datasetId)}
                            </tbody>
                        </Table>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );

}

export default Replication;