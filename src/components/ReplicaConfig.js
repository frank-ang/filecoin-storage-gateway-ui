import React, { useState } from 'react';

function ReplicaConfig() {

    const [config, setConfig] = useState([]);

    return(

                      <tr>
                          <td>Datoo</td>
                          <td>Datas</td>
                          <td>Data</td>
                          <td><button className="btn btn-outline-success" >Configure</button></td>
                      </tr>
    )
}
export default ReplicaConfig
