import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import GenerationRequest from './GenerationRequest';
import Table from 'react-bootstrap/Table'

function Preparation({preparation}) {

    useEffect(() => {
      }, [preparation]);

    function preparationAttributeRow(keyName, label) {
        return (
            <Row style={{ textAlign: "left" }}>
                <Col xs lg="4">{label || keyName}</Col>
                <Col xs lg="auto">{propVal(preparation, keyName)}</Col>
            </Row>
        );
    }

    function propVal(obj, keyName) {
        return obj && JSON.stringify(obj[keyName]) || "";
    }

    return(
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Header style={{
                    display: 'flex',
                    alignItems: 'left',
                    justifyContent: 'left',
                }}>Data Set Preparation</Card.Header>
                <Card.Body>
                    <Container fluid="true">
                        {preparationAttributeRow("id", "ID")}
                        {preparationAttributeRow("name", "Name")}
                        {preparationAttributeRow("path", )}
                        {preparationAttributeRow("minSize", "Min Size")}
                        {preparationAttributeRow("maxSize", "Max Size")}
                        {preparationAttributeRow("outDir", "Output Directory")}
                        {preparationAttributeRow("scanningStatus", "Scanning Status")}
                        {preparationAttributeRow("scanned", "Scanned")}
                    </Container>


                    <Container fluid="true">
                        <Accordion className="m-2">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Generation Requests ( {preparation && preparation.generationTotal && JSON.stringify(preparation.generationTotal)} )
                                </Accordion.Header>
                                <Accordion.Body>
                                    {preparationAttributeRow("generationTotal", )}
                                    {preparationAttributeRow("generationActive", )}
                                    {preparationAttributeRow("generationPaused", )}
                                    {preparationAttributeRow("generationError", )}
                                    <Table striped="columns" bordered hover responsive className="selectableTable">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>index</th>
                                                <th>status</th>
                                                <th>dataCid</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {preparation && preparation.generationRequests && preparation.generationRequests.map
                                            && preparation.generationRequests.map((genRq,) => (
                                                    <GenerationRequest generationRequest={genRq}/>
                                        ))}
                                        </tbody>
                                    </Table>


                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>


                </Card.Body>
            </Card>

        </div>
    );

}

export default Preparation;