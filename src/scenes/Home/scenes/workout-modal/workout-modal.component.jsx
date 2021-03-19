import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Modal} from "./workout-modal.styles";

import SelectionForm from "./scenes/selection-form/selection-form.component";
import HomeForm from "./scenes/home-form/home-form.component";

import constants from "./workout-modal.constants";

const WorkoutModule = () => {
  const [showSelectionViw, setShowSelectionViw] = useState(false);
  const [selectionData, setSelectionData] = useState(null);

  const selectOption = data => {
    setSelectionData(data);
    setShowSelectionViw(true);
  };

  return (
    <Container className='mt-5'>
      <Row className='text-center'>
        <Col md={3}> </Col>
        <Col md={6}>
          <Modal>
            {
              !showSelectionViw ? (
                <HomeForm  options={constants.OPTIONS} selectOption={selectOption}
                />
              ) : (
                <SelectionForm data={selectionData} setShowSelectionViw={setShowSelectionViw}
                />
              )
            }
          </Modal>
        </Col>
        <Col md={3}> </Col>
      </Row>
    </Container>
  )
};

export default WorkoutModule;
