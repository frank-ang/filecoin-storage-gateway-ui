import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ReplicaConfigRow({config},{index}) {

    useEffect(() => {
        console.log(`#### ReplicaConfigRow.useEffect(). config:${JSON.stringify(config)}}, index:${JSON.stringify(index)}`)
    }, [config, index]);

    const navigate = useNavigate();
    const onEditReplicaConfig = useCallback(() => { 
        console.log(`ReplicaConfigRow . Navigating to Editor...`);
        navigate('/ReplicaConfigEditor') //, {replace: true})
    }, [navigate]);

    return (
            <tr>
                <td>{JSON.stringify(config.replicaId)}</td>
                <td>{JSON.stringify(config.size)}</td>
                <td>{JSON.stringify(config.storageProvider)}</td>
                <td>{JSON.stringify(config.spid)}</td>
                <td>{JSON.stringify(config.location)}</td>
                <td>{JSON.stringify(config.estimatedFees)}</td>
                <td><Button type="button" variant="primary" className="float-right" onClick={onEditReplicaConfig}>Configure</Button></td>
            </tr>
    )
}

export default ReplicaConfigRow
