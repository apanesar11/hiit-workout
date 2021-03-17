import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Navbar = () => (
  <Container fluid>
    <Row className='mt-3'>
      <Col>
        <img src={require('../../assets/logo.png')} alt='logo'/>
      </Col>
    </Row>
  </Container>
);

export default Navbar;
