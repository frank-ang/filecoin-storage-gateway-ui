import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';

function Preparation({prepId}, {preparation}) {
    console.log(`Preparation. Prep ID: ${JSON.stringify(prepId)} ; Preparation:  $ { preparation}.`);

    useEffect(() => {
        console.log(`Preparation. USE EFFECT!! Prep ID: ${prepId} ; Preparation: $ { JSON.stringify(preparation)}`);
      }, [prepId, preparation]);

    if (false) {
        return (
        <div>
                <p> prepId is: {prepId} </p>
        </div>
        );
    } else {
        return(
            <div>
            <Card style={{ width: '100%' }}>
                <Card.Header style={{
                    display: 'flex',
                    alignItems: 'left',
                    justifyContent: 'left',
                }}>Data Set: Preparation</Card.Header>
                <Card.Body>
                Prep Id: [{JSON.stringify(prepId)}] , Preparation: [ {preparation ? "JSON.stringify(preparation)" : "UNDEFINED"} ]

                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                </Card.Body>
            </Card>
            </div>
        );
    }

}

export default Preparation;