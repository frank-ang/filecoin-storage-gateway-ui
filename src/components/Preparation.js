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



    function preparationAttribute(keyName, label) {
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
                        {preparationAttribute("id", "ID")}
                        {preparationAttribute("name", "Name")}
                        {preparationAttribute("path", )}
                        {preparationAttribute("minSize", )}
                        {preparationAttribute("maxSize", )}
                        {preparationAttribute("outDir", )}
                        {preparationAttribute("scanningStatus", )}

                        {preparationAttribute("scanned", )}
                        {preparationAttribute("generationTotal", )}
                        {preparationAttribute("generationActive", )}
                        {preparationAttribute("generationPaused", )}
                        {preparationAttribute("generationError", )}
                    </Container>


                    <Container fluid="true">
                        <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>

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