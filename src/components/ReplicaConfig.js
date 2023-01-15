import React, { useEffect } from 'react';

function ReplicaConfig({config},{index}) {

    useEffect(() => {
        console.log(`#### ReplicaConfig.useEffect(). config:${JSON.stringify(config)}}, index:${JSON.stringify(index)}`)
    }, [config, index]);

    return (
            <tr>
                <td>{JSON.stringify(config.replicaId)}</td>
                <td>{JSON.stringify(config.size)}</td>
                <td>{JSON.stringify(config.storageProvider)}</td>
                <td>{JSON.stringify(config.spid)}</td>
                <td>{JSON.stringify(config.location)}</td>
                <td>{JSON.stringify(config.estimatedFees)}</td>
                <td><button className="btn btn-outline-success" >Configure</button></td>
            </tr>
    )
}

export default ReplicaConfig
