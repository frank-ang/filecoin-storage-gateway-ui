import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';

function Preparation({data}) {
    console.log(`Preparation: ${data}`);

    useEffect(() => {
        document.title = `useEffect HAPPENS! Data: ${data}.`;
        console.log(`Preparation. useEffect() Data: ${data}.`);
      }, [data]);

    if (false) {
        return (
        <div>
                <p> data is: {data} </p>
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
                data is: [{data}]
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