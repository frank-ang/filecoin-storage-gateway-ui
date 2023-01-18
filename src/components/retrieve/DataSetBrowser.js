import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'

function DataSetBrowser({datasetId}) {

    useEffect(() => {
      }, [datasetId]);

    return(
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Header style={{
                    display: 'flex',
                    alignItems: 'left',
                    justifyContent: 'left',
                }}>
                    Data Set Browser
                </Card.Header>
                <Card.Body>
                    <Container fluid="true">
                        TODO
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );

}

export default DataSetBrowser;
