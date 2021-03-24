import React, {useState} from "react";
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
    <Container className='mt-lg-5 mt-1'>
      <Row className='justify-content-center text-center'>
        <Col lg={6}>
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
      </Row>
    </Container>
  )
};

export default WorkoutModule;
