import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Navbar = () => (
  <Container fluid>
    <Row className='mt-3'>
      <Col>
        <a href="/">
          <img src={require('../../assets/logo.png')} alt='logo'/>
        </a>
      </Col>
    </Row>
  </Container>
);

export default Navbar;
