import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GridRow(props) {
  return (
    <Row className="justify-content-center"
      style={{ backgroundColor: props.color !== undefined ? props.color : "inherit" }}
    >
      <Col className="text-center">{props.children}</Col>
    </Row>
  );
}

export default GridRow;
