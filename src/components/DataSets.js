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
    const [activeRow, setActiveRow] = useState(-1);

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
        console.log(`rowSelected called: ${e}, ${rowId}`);
        setActiveRow(rowId);
        //e.class="active";
        console.log(e.target);
        console.log(e);
    }
     
    var list = document.getElementsByClassName("Table");
    for (var item of list) {
        console.log(item)
    }

    function tableSelected(e) {
        // Table handler called before Row handler, So its prior to state change. 
        // console.log(`Table selected. ... Active Row: ` + activeRow)
    }

    return (
        <div>
            <Card>
                <Card.Header>
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
                        <tbody onClick={tableSelected}>
                        {data.map((prep, index) => (
                            <tr key={index} onClick={(e) => {
                                    rowSelected(e, index)
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
                    <Button variant="outline-primary" className="float-right" onClick={getPreparations}>Get Preparations</Button>
                </Card.Body>

                <Card.Footer className="text-muted">Card footer here </Card.Footer>
            </Card>
            <textarea rows="10" cols="100" value={JSON.stringify(data, undefined, 2)} onChange={(e) => true}> </textarea>

        </div>
    )
}
export default DataSets