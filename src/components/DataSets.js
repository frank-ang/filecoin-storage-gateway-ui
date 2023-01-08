import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Preparation from './Preparation';

function DataSets (props) {
    const apiPath = '/preparations';

    useEffect(() => { }); // no-op.

    const [data, setData] = useState([]);
    const [activeRow, setActiveRow] = useState(-1);
    const [prepId, setPrepId] = useState('');

    function getPreparations(e) {
        e.preventDefault();
        console.log('Getting preparations.');
        fetch(`${apiPath}`, { method: 'GET' })
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson);
            });
    }

    function rowSelected(e, rowId, prepIdText) {
        console.log(`rowSelected called: ${e}, ${rowId}`);
        setActiveRow(rowId);
        setPrepId(prepIdText);
        //e.class="active";
        console.log(e.target);
        console.log(e);
    }

    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Header style={{
                    display: 'flex',
                    // alignItems: 'left',
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
                        {data.map((prep, index) => (
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
                            PrepId: {prepId}
                        <Button variant="outline-primary" className="float-right" onClick={getPreparations}>Reload</Button>
                    </div>
                </Card.Body>
            </Card>
            <Preparation/>
            <textarea rows="10" cols="100" value={JSON.stringify(data, undefined, 2)} onChange={(e) => true}> </textarea>
        </div>
    )
}
export default DataSets