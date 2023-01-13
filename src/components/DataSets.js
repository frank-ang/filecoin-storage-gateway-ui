import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Preparation from './Preparation';
import Replication from './Replication';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DataSets () {
    const PREPARATIONS_LIST_API_PATH = '/preparations';
    const PREPARATION_API_PATH = '/preparation';

    const [preparationsList, setPreparationsList] = useState([]);
    const [preparation, setPreparation] = useState([]);
    const [activeRow, setActiveRow] = useState(-1);
    const [prepId, setPrepId] = useState('');

    useEffect(() => { });

    function rowSelected(e, rowId, prepIdText) {
        setActiveRow(rowId);
        setPrepId(prepIdText);
        queryPreparation(prepIdText);
    }

    function queryPreparationsList() {
        console.log('Querying for preparations list.');
        fetch(`${PREPARATIONS_LIST_API_PATH}`, { method: 'GET' })
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setPreparationsList(myJson);
            });
    }

    function queryPreparation(prepId) {
        console.log(`Querying for preparation: ${prepId}`);
        fetch(`${PREPARATION_API_PATH}/${prepId}`, { method: 'GET' })
            .then(function(response) {
                console.log("Got API response.")
                console.log(response);
                return response.json();
            })
            .then(function(myJson) {
                console.log("JSON response.")
                console.log(myJson);
                setPreparation(myJson);
            });
    };

    function configureReplication() {
        console.log(`Configuring replication for prepID: ${prepId}`);
    }

    useEffect(() => {
        console.log("useEffect...");
        queryPreparationsList();
    }, []); // should run once only?

    return (
        <div>
        <Container>
        <Row className="m-2"><Col>

            <Card style={{ width: '100%' }}>
                <Card.Header style={{
                    display: 'flex',
                    justifyContent: 'left',
                }}>
                    Data Sets
                </Card.Header>
                <Card.Body>
                    <Table striped="columns" bordered hover responsive className="selectableTable">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>path</th>
                                <th>outDir</th>
                                <th>scanningStatus</th>
                                <th>progress</th>
                            </tr>
                        </thead>
                        <tbody>
                        {preparationsList.map((prep, index) => (
                            <tr key={index} onClick={(e) => {
                                    rowSelected(e, index, prep.id)
                                }}
                                >
                                <td className={index==activeRow ? 'selected' : '' }>{prep.id} | {index}</td>
                                <td className={index==activeRow ? 'selected' : '' }>{prep.name}</td>
                                <td className={index==activeRow ? 'selected' : '' }>{prep.path}</td>
                                <td className={index==activeRow ? 'selected' : '' }>{prep.outDir}</td>
                                <td className={index==activeRow ? 'selected' : '' }>{prep.scanningStatus}</td>
                                <td className={index==activeRow ? 'selected' : '' }><ProgressBar animated now={60} /></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <div style={{
                        display: 'flex',
                        alignItems: 'right',
                        justifyContent: 'right',
                        }}>
                        <Button variant="outline-primary" className="float-right">Add</Button>
                        <Button variant="outline-primary" className="float-right">Remove</Button>

                        <Button variant="outline-primary" className="float-right" onClick={queryPreparationsList}>Refresh</Button>
                        <Button variant="outline-primary" className="float-right" onClick={configureReplication}>Configure</Button>

                    </div>
                </Card.Body>
            </Card>
            </Col></Row>
            <Row className="m-2"><Col>
                {prepId && (
                    <Preparation preparation={preparation}/>
                )}
            </Col><Col>
                {prepId && (
                    <Replication datasetId={prepId}/>
                )}
            </Col>
        </Row>
        </Container>
        </div>
    )
}
export default DataSets