import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Preparation from './Preparation';
 
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
        // e.preventDefault();
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

    useEffect(() => {
        console.log("useEffect...");
        queryPreparationsList();
    }, []); // should run once only.

    return (
        <div>
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
                        <Button variant="outline-primary" className="float-right" onClick={queryPreparationsList}>Reload</Button>
                    </div>
                </Card.Body>
            </Card>
            {prepId && (
                <Preparation preparation={preparation}/>
            )}
        </div>
    )
}
export default DataSets