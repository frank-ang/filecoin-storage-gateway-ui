import React, { useEffect } from 'react';

function ReplicaConfig({config},{index}) {

    useEffect(() => {
        console.log(`#### ReplicaConfig.useEffect(). config:${JSON.stringify(config)}}, index:${JSON.stringify(index)}`)
    }, [config, index]);

    return(

                      <tr>
                          <td>{JSON.stringify(config)}</td>
                          <td>{JSON.stringify(index)}</td>
                          <td>Bar</td>
                          <td><button className="btn btn-outline-success" >Configure</button></td>
                      </tr>
    )
}
export default ReplicaConfig

/*
                            <tr key={index} onClick={(e) => {
                                    rowSelected(e, index, prep.id)
                                }}
                                >
                                <td className={index==activeRow ? 'selected' : '' }>{prep.id} | {index}</td>
                                <td className={index==activeRow ? 'selected' : '' }>{prep.name}</td>
                            </tr>
*/