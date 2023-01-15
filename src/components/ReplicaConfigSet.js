import React, { useState, useEffect } from 'react';
import ReplicaConfig from './ReplicaConfig';

function ReplicaConfigSet() {
    const [replicaConfig, setReplicaConfig] = useState([]);
    const [replicaConfigSet, setReplicaConfigSet] = useState([]);

    useEffect(() => {
        console.log(`ReplicaConfigSet.replicaConfigSet() : ${JSON.stringify(replicaConfigSet)}`)
    }, [replicaConfigSet]);

    const addReplicaConfig = () => {
        console.log(`## ReplicaConfigSet.addReplicaConfig()`)
        const rowsInput={
            fullName:'new',
            emailAddress:'new',
            salary:'new'  
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
                          <th>Full Name</th>
                          <th>Email Address</th>
                          <th>Salary</th>
                          <th><button className="btn btn-outline-success" onClick={addReplicaConfig}>&nbsp; + &nbsp;</button></th>
                      </tr>
                    </thead>
                    <tbody>

                        {console.log(`ReplicaConfigSet MAP! replicaConfigSet: ${JSON.stringify(replicaConfigSet)}`) &&
                        replicaConfigSet.map((repConf, _index) => (
                            <ReplicaConfig config={repConf} index={_index} /> // deleteTableRows={deleteReplicaConfig} handleChange={handleChange} />
                        ))}

                   </tbody> 
                </table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}

export default ReplicaConfigSet;
