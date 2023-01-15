import React, { useState, useEffect } from 'react';
import ReplicaConfig from './ReplicaConfig';

function ReplicaConfigSet(){
    const [replicaConfig, setReplicaConfig] = useState([]);
    const [replicaConfigSet, setReplicaConfigSet] = useState([]);
    useEffect(() => {
        console.log(`### ReplicaConfigSet: use effect. replicaConfigSet: ${JSON.stringify(replicaConfigSet)}`)
    }, [replicaConfig, replicaConfigSet]);

    const addReplicaConfig = ()=>{
        console.log(`## addReplicaConfig`)

        const rowsInput={
            fullName:'new',
            emailAddress:'new',
            salary:'new'  
        } 
        setReplicaConfigSet([...replicaConfigSet, rowsInput])
        
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
                          <th><button className="btn btn-outline-success" onClick={addReplicaConfig} >+</button></th>
                      </tr>
                    </thead>
                   <tbody>
                        <ReplicaConfig config={replicaConfigSet} deleteTableRows={deleteReplicaConfig} handleChange={handleChange} />
                   </tbody> 
                </table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}

// TODO SP Catalog.
export default ReplicaConfigSet
