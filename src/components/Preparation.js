import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';


function renderPlaceholderCard() { // todo is this any use?
    return(
        <Card style={{ width: '100%' }}>
            <Card.Header style={{
                display: 'flex',
                alignItems: 'left',
                justifyContent: 'left',
            }}>Data Set: Preparation</Card.Header>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
            </Card.Body>
        </Card>
    );
}

function Preparation() {
    const apiPath = '/preparations';
    useEffect(() => { }); // no-op.
    const [data, setData] = useState([]);

    function innerRenderPlaceholderCard() {
        return(
            <Card style={{ width: '100%' }}>
                <Card.Header style={{
                    display: 'flex',
                    alignItems: 'left',
                    justifyContent: 'left',
                }}>Data Set: Preparation</Card.Header>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                </Card.Body>
            </Card>
        );
    }
    if (false) {
        return (
        <div><p>Interesting stuff... data is: {data} </p>
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