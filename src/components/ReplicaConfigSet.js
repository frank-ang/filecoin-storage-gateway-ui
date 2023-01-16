import React, { useState, useEffect } from 'react';
import ReplicaConfigRow from './ReplicaConfigRow';
import { Button, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ReplicaConfigSet() {
    const [replicaConfig, setReplicaConfig] = useState([]);
    const [replicaConfigSet, setReplicaConfigSet] = useState([
        {
            replicaId:'1',
            size:'100 TiB',
            storageProvider:'Greater Heat',
            spid:'t01000',
            location:'Dallas, Texas, USA',
            estimatedFees:'USD $235.52',
        }
    ]);

    useEffect(() => {
        console.log(`ReplicaConfigSet.replicaConfigSet() : ${JSON.stringify(replicaConfigSet)}`)
    }, [replicaConfigSet]);

    const addReplicaConfig = () => {
        console.log(`## ReplicaConfigSet.addReplicaConfig()`)
        const rowsInput={
            replicaId:'new',
            size:'new size',
            storageProvider:'new SP',
            spid:'t01000+',
            location:'new location',
            estimatedFees:'new estimated fees',
        }
        setReplicaConfigSet([...replicaConfigSet, rowsInput])
        console.log(`## Opening mockup ReplicaConfigEditor...`);

        console.log(`## ReplicaConfigSet.addReplicaConfig() completed`)
    }

    const deleteReplicaConfig = (index)=>{
        console.log(`## deleteReplicaConfig`)
        const rows = [...replicaConfig];
        rows.splice(index, 1);
        setReplicaConfigSet(rows);
    }

    const handleChange = (index, evnt)=>{
        console.log(`## handleChange`)
        const { name, value } = evnt.target;
        const rowsInput = [...replicaConfig];
        rowsInput[index][name] = value;
        setReplicaConfigSet(rowsInput);
    }

    return(
        <Container fluid="true">
            <Row>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Replica ID</th>
                            <th>Size</th>
                            <th>Storage Provider</th>
                            <th>SP ID</th>
                            <th>Country</th>
                            <th>Storage Fees ($USD)</th>
                            <th><Button type="button" variant="primary" className="float-right" onClick={addReplicaConfig}>+Add</Button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(`#### ReplicaConfigSet MAP! replicaConfigSet: ${JSON.stringify(replicaConfigSet)}`) &&
                        replicaConfigSet.map((repConf, index) => (
                            <ReplicaConfigRow config={repConf} key={index} onClick={(e) => {
                                alert("ReplicaConfig clicked!")
                            }}/> // deleteTableRows={deleteReplicaConfig} handleChange={handleChange} />
                        ))}
                        <ReplicaConfigRow config={replicaConfigSet[0]} index={0} />
                    </tbody> 
                </table>
            </Row>
        </Container>
    )
}

export default ReplicaConfigSet;

// Filecoin storage cost comparison vs S3 Glacier Instant Retrieval 100TiB 30TiB retrieved monthly. Monthly Cost: USD$2,355.23
// https://calculator.aws/#/estimate?id=dbd073c7689c236e45313c908bff9e1f916f094c

// Filecoin storage cost comparison vs S3 Glacier Instant Retrieval 100TiB 10TiB retrieved monthly. Monthly Cost: USD$1,126.43
// https://calculator.aws/#/estimate?id=1f547ab2e8a8789c80a19c0799ec4369b7ef152d
