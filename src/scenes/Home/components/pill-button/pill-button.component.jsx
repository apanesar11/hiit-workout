import React from "react";
import {Button} from "./pill-button.styles";
import {Col, Row} from "react-bootstrap";

const PillButton = ({children, onClick}) => (
  <Row className='mt-5' onClick={onClick}>
    <Col md={1}> </Col>
    <Col md={10}>
      <Button>
        {children}
      </Button>
    </Col>
    <Col md={1}> </Col>
  </Row>
);

export default PillButton;