import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';


function Preparation({preparation}) {
    console.log(`Preparation: ${JSON.stringify(preparation)}`);

    useEffect(() => {
        console.log(`Preparation. USE EFFECT!!: ${JSON.stringify(preparation)}`);
      }, [preparation]);

    console.log(`Preparation DEBUG. Preparation: ${JSON.stringify(preparation)}`); // possibly null.

    function preparationAttributeRow(keyName, label) {
        return (
            <Row style={{ textAlign: "left" }}>
                <Col xs lg="4">{label || keyName}</Col>
                <Col xs lg="auto">{propVal(preparation, keyName)}</Col>
            </Row>
        );
    }

    function propVal(obj, keyName) {
        console.log(`propVal( ${JSON.stringify(obj)}, ${JSON.stringify(keyName)})`)
        return obj && JSON.stringify(obj[keyName]) || "";
    }

    function GenerationRequestList(generationRequests) {
        if (generationRequests && generationRequests.map) {
            return (
                generationRequests.map((genRq, index) => (
                    <Row style={{ textAlign: "left" }}>
                        <Col xs lg="4">Generation Request</Col>
                        <Col xs lg="auto">{JSON.stringify(genRq)}</Col>
                    </Row>
                ))
            )
        } else {
            return (
                <text>No data in Generation Request List.</text>
            );
        }
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
                        {preparationAttributeRow("minSize", )}
                        {preparationAttributeRow("maxSize", )}
                        {preparationAttributeRow("outDir", )}
                        {preparationAttributeRow("scanningStatus", )}
                        {preparationAttributeRow("scanned", )}
                    </Container>


                    <Container fluid="true">
                        <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Generation Status</Accordion.Header>
                            <Accordion.Body>
                                {preparationAttributeRow("generationTotal", )}
                                {preparationAttributeRow("generationActive", )}
                                {preparationAttributeRow("generationPaused", )}
                                {preparationAttributeRow("generationError", )}
                                <hr/>
                                {console.log(`### Dump genrequests: ${JSON.stringify(preparation.generationRequests) || true}`)}
                                <GenerationRequestList generationRequests={preparation.generationRequests || true} />

                                <hr/>
                                {preparationAttributeRow("generationRequests", )}

                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Container>

                    <hr/>
                    <Card.Text>Data Set Preparation JSON: [{JSON.stringify(preparation)}]</Card.Text>


                </Card.Body>
            </Card>

        </div>
    );

}

export default Preparation;