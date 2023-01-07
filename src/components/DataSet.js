import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function DataSet (props) {

    return (
        <div>

                    <Container>
                        <Row>
                            <Col >
                                <p>
                                    DataSet col 1 here
                                </p>
                            </Col>
                            <Col >
                                <p>
                                    DataSet col 2 here
                                </p>
                            </Col>
                            <Col >
                                <p>
                                    DataSet col 3 here
                                </p>
                            </Col>
                        </Row>
                    </Container>
        </div>
    )
}
export default DataSet