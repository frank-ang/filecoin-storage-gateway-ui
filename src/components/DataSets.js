import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar';

function DataSets (props) {
    const apiName = 'FortuneApi';
    const host = 'localhost:7001';
    const path = '/preparations';

    useEffect(() => { }); // no-op.

    const [data, setData] = useState([]);
    const [activeRow, setActiveRow] = useState(0);

    function getPreparations(e) {
        e.preventDefault();
        console.log('Getting preparations.');
        fetch(`${path}`, { method: 'GET' })
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson);
            });
    }

    function rowSelected(e, rowId) {
        console.log(`setActiveRow called: ${e}, ${rowId}`);
        e.class="active";
        console.log(e.target);
        console.log(e);
        // console.log('this is:', this); // undefined
        // this.setState(activeRow = rowId);
        // console.log(`setActiveRow completed`);
    }
     
    var list = document.getElementsByClassName("Table");
    for (var item of list) {
        console.log(item)
    }

    function tableSelected(e) {
        console.log("tableSelected()...")
        console.log(e.target);
        console.log(e);
    }

    return (
        <div>
            <Card>
                <Card.Header>
                    Data Sets
                </Card.Header>
                <Card.Body>
                    <Table striped="columns" bordered hover responsive className="selectableTable">
                        <thead >
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>path</th>
                                <th>outDir</th>
                                <th>scanningStatus</th>
                                <th>progress</th>
                            </tr>
                        </thead>
                        <tbody onClick={tableSelected}>
                        {data.map((prep, index) => (
                            <tr key={index} onClick={e => setActiveRow(index)} >
                                <td>{prep.id}</td>
                                <td>{prep.name}</td>
                                <td>{prep.path}</td>
                                <td>{prep.outDir}</td>
                                <td>{prep.scanningStatus}</td>
                                <td><ProgressBar animated now={60} /></td>
                            </tr>
                        ))}
                        </tbody>
                        Active Row: {activeRow}
                    </Table>
                    <Button variant="outline-primary" className="float-right" onClick={getPreparations}>Get Preparations</Button>
                </Card.Body>

                <Card.Footer className="text-muted">Card footer here </Card.Footer>
            </Card>
            <textarea rows="10" cols="100" value={JSON.stringify(data, undefined, 2)} onChange={(e) => true}> </textarea>

        </div>
    )
}
export default DataSets