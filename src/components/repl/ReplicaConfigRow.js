import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ReplicaConfigRow({config},{index} ) {

    useEffect(() => {
        console.log(`#### ReplicaConfigRow useEffect() ! config:${JSON.stringify(config)}}, index:${JSON.stringify(index)}`)
    }, [config, index]);

    const navigate = useNavigate();
    const onEditReplicaConfig = useCallback(() => { 
        console.log(`ReplicaConfigRow . Navigating to Editor...`);
        navigate('/ReplicaConfigEditor')
    }, [navigate]);

    return (
        <tr key={index}>
            <td>{config && JSON.stringify(config.replicaId)}</td>
            <td>{config && JSON.stringify(config.size)}</td>
            <td>{config && JSON.stringify(config.storageProvider)}</td>
            <td>{config && JSON.stringify(config.spid)}</td>
            <td>{config && JSON.stringify(config.location)}</td>
            <td>{config && JSON.stringify(config.estimatedFees)}</td>
            <td>
                <Button type="button" variant="primary" className="float-left" onClick={onEditReplicaConfig}>Configure</Button>
                <Button type="button" variant="primary" className="float-right" onClick={onEditReplicaConfig}>Delete</Button>
            </td>

        </tr>
    )
}

export default ReplicaConfigRow
