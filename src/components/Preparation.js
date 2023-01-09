import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';

function Preparation() {
    useEffect(() => { }); // no-op.
    const [data, setData] = useState('');
    console.log(`Preparation: ${data}`);

    function getData() {
        console.log(`Preparation getData: ${data}`);
        return data;
    }
    useEffect(() => {
        document.title = `useEffect HAPPENS! Data: ${data}.`;
        getData();
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
                    <Button variant="outline-primary" className="float-right" onClick={getData}>Reload</Button>

                </Card.Body>
            </Card>
            </div>
        );
    }

}

export default Preparation;