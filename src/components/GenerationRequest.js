
import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GenerationRequest({generationRequest}) {

    useEffect(() => {
        // console.log(`GenerationRequest. USE EFFECT!! :${JSON.stringify(generationRequest)}` );
      }, [generationRequest]);

    return (
        <tr onClick={(e) => {console.log(`Generation Request clicked!`)}}>
                <td>
                    {JSON.stringify(generationRequest.id)}
                </td>
                <td>
                    {JSON.stringify(generationRequest.index)}
                </td>
                <td>
                    {JSON.stringify(generationRequest.status)}
                </td>
                <td>
                    {JSON.stringify(generationRequest.dataCid)}
                </td>
        </tr>


     )
}

export default GenerationRequest;
