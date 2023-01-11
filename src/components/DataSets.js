import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Preparation from './Preparation';
 
function DataSets () {
    const PREPARATIONS_LIST_API_PATH = '/preparations';
    const PREPARATION_API_PATH = '/preparation';

    useEffect(() => { }); // no-op.

    const [preparationsList, setPreparationsList] = useState([]);
    const [preparation, setPreparation] = useState([]);
    const [activeRow, setActiveRow] = useState(-1);
    const [prepId, setPrepId] = useState('');

    console.log(`DataSets.preparation: ${JSON.stringify(preparation)}); preparation.id: ${preparation ? preparation.id : 'UNDEFINED'}`)

    function rowSelected(e, rowId, prepIdText) {
        console.log(`rowSelected called: ${e}, ${rowId}, ${prepIdText}. Setting state async...`);
        setActiveRow(rowId);
        setPrepId(prepIdText);
        queryPreparation(prepIdText);
    }

    function queryPreparationsList(e) {
        e.preventDefault();
        console.log('Getting preparations.');
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
        console.log(`queryPreparation: ${prepId}`);
        fetch(`${PREPARATION_API_PATH}/${prepId}`, { method: 'GET' })
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                console.log(`queryPreparation returned: ${JSON.stringify(myJson)}`);
                console.log(`queryPreparation returned id: ${myJson.id}`);

                const myPreparation = [
                    { prepId: `${myJson.id}`, 
                      name: "QUERIED!", },
                ];
                console.log(`Setting Preparation to: ${JSON.stringify(myJson)}`);
                setPreparation(myJson); //myPreparation); // (myJson); // avoid saving the nested data struct.
            });
    }

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
                                <th>active row</th>
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
                                <td className={index==activeRow ? 'selected' : '' }>Active Row: {activeRow}</td>
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