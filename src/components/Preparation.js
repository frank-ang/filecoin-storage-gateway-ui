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
        console.log(`GenerationRequestList(${JSON.stringify(generationRequests[0])})`);
        // console.log(`GenerationRequestList(${JSON.stringify(generationRequests)})`);

        if (generationRequests && generationRequests[0] && generationRequests[0].id) {
            var genRqArray = generationRequests[0].generationRequests
            console.log("rendering generationRequests !!");
            return (
                genRqArray.map((genRq, index) => (
                    <Row style={{ textAlign: "left" }}>
                        <Col xs lg="4">Generation Request</Col>
                        <Col xs lg="auto">{JSON.stringify(genRq)}</Col>
                    </Row>
                ))
            )
        } else {
            console.log(`No data1. generationRequests: ${JSON.stringify(generationRequests)}`);
            // hacking...  // TODO::: UNDEFINED ???
            console.log(`No data2. generationRequests: ${JSON.stringify(generationRequests[0]) || "ERROR"}`);
            console.log(generationRequests[0]);
            return (
                <Card.Text>No data in Generation Request List.</Card.Text>
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
                        {preparationAttributeRow("minSize", "Min Size")}
                        {preparationAttributeRow("maxSize", "Max Size")}
                        {preparationAttributeRow("outDir", "Output Directory")}
                        {preparationAttributeRow("scanningStatus", "Scanning Status")}
                        {preparationAttributeRow("scanned", "Scanned")}
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
                                {console.log(`### Dump genrequests: ${JSON.stringify(preparation.generationRequests) || "Unable to Stringify!"}`)}

                                //{console.log(`### Dump genrequests: ${JSON.stringify(preparation.generationRequests) || "Unable to Stringify!"}`)}
                               <GenerationRequestList generationRequests={preparation.generationRequests} />
                                <hr/>

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
// {preparationAttributeRow("generationRequests", )}

export default Preparation;