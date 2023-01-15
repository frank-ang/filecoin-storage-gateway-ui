import React, { useState } from 'react';
import ReplicaConfig from './ReplicaConfig';

function ReplicaConfigSet(){
    const [replicaConfig, setReplicaConfig] = useState([]);
    const [replicaConfigSet, setReplicaConfigSet] = useState([]);

    const addReplicaConfig = ()=>{

        const rowsInput={
            fullName:'',
            emailAddress:'',
            salary:''  
        } 
        setReplicaConfigSet([...replicaConfigSet, rowsInput])
        
    }
    const deleteReplicaConfig = (index)=>{
        const rows = [...replicaConfig];
        rows.splice(index, 1);
        setReplicaConfigSet(rows);
    }

    const handleChange = (index, evnt)=>{
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
