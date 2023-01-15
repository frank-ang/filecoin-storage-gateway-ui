import React, { useState, useEffect } from 'react';
import ReplicaConfig from './ReplicaConfig';

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
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                <table className="table">
                    <thead>
                      <tr>
                          <th>Replica ID</th>
                          <th>Size</th>
                          <th>Storage Provider</th>
                          <th>SP ID</th>
                          <th>Country</th>
                          <th>Storage Fees ($USD)</th>
                          <th><button className="btn btn-outline-success" onClick={addReplicaConfig}>&nbsp; + &nbsp;</button></th>
                      </tr>
                    </thead>
                    <tbody>

                        {console.log(`ReplicaConfigSet MAP! replicaConfigSet: ${JSON.stringify(replicaConfigSet)}`) &&
                        replicaConfigSet.map((repConf, _index) => (
                            <ReplicaConfig config={repConf} index={_index} /> // deleteTableRows={deleteReplicaConfig} handleChange={handleChange} />
                        ))}
                        <ReplicaConfig config={replicaConfigSet[0]} index={0} />

                   </tbody> 
                </table>
                </div>
                <div className="col-sm-4">
                Filecoin Simple Calculator of cost: (actually, this is S3 Glacier Instant Retrieval 100TiB) USD$2,355.23
                https://calculator.aws/#/estimate?id=dbd073c7689c236e45313c908bff9e1f916f094c
                </div>

            </div>

        </div>
    )
}

export default ReplicaConfigSet;
