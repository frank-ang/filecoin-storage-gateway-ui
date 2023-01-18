import React, { useState, useEffect, useCallback } from 'react';
import ReplicaConfigRow from './ReplicaConfigRow';
import { Button, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';


function ReplicaConfigSet() {
    const [replicaConfig, setReplicaConfig] = useState([]);
    const [replicaConfigSet, setReplicaConfigSet] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(`ReplicaConfigSet useEffect() : ${JSON.stringify(replicaConfigSet)}`)
    }, [replicaConfigSet]);

    const addReplicaConfig = () => {
        console.log(`ReplicaConfigSet addReplicaConfig()...`)
        const rowsInput={
            replicaId:'TODO +1',
            size:'TODO size',
            storageProvider:'',
            spid:'',
            location:'',
            estimatedFees:'',
        }
        setReplicaConfigSet([...replicaConfigSet, rowsInput])
        console.log(`ReplicaConfigSet. addReplicaConfig completed. ##### Replica count ${replicaConfigSet.length}`)
    }

    const handleDelete = (index) => {
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

    const onEditReplicaConfig = useCallback(() => { 
        console.log(`ReplicaConfigRow . Navigating to Editor...`);
        navigate('/ReplicaConfigEditor')
    }, [navigate]);

    // TODO convert table to bootstrap.
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
                        {replicaConfigSet.map((config, index) => (
                                <ReplicaConfigRow config={config} index={0} />
                            ))
                        }
                    </tbody> 
                </table>
            </Row>
        </Container>
    )
}

export default ReplicaConfigSet;

