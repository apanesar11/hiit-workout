import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Modal} from "./workout-modal.styles";

import SelectionForm from "./scenes/selection-form/selection-form.component";
import HomeForm from "./scenes/home-form/home-form.component";

import constants from "./workout-modal.constants";

const WorkoutModule = () => {
  const [rounds, setRounds] = useState('20 Rounds');
  const [exLength, setExLength] = useState('50 Seconds');
  const [recLength, setRecLength] = useState('10 Seconds');
  const [warmup, setWarmup] = useState('1 Minute');
  const [cooldown, setCooldown] = useState('1 Minute');
  const [totalMinutes, setTotalMinutes] = useState('22 Minutes');

  const [showSelectionViw, setShowSelectionViw] = useState(false);
  const [selectionData, setSelectionData] = useState(null);

  const calcTotalMins = () => {
    const total = parseInt((
      (warmup === 'None' ? 0 : parseInt(warmup.split(' ')[0]) * 60) +
      parseInt(rounds.split(' ')[0]) * (
        parseInt(exLength.split(' ')[0]) +
        parseInt(recLength.split(' ')[0])
      ) +
      (cooldown === 'None' ? 0 : parseInt(cooldown.split(' ')[0]) * 60)
    )/60);
    setTotalMinutes(`${total} Minutes`);
  };

  useEffect(() => {
    calcTotalMins();
  }, [rounds, exLength, recLength, warmup, cooldown]);

  const optionIdToState = id => {
    switch (id) {
      case 'rounds': return [rounds, setRounds];
      case 'exLength': return [exLength, setExLength];
      case 'recLength': return [recLength, setRecLength];
      case 'warmup': return [warmup, setWarmup];
      case 'cooldown': return [cooldown, setCooldown];
    }
  };

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
                <HomeForm
                  options={constants.OPTIONS}
                  optionIdToState={optionIdToState}
                  selectOption={selectOption}
                  totalMinutes={totalMinutes}
                />
              ) : (
                <SelectionForm
                  data={selectionData}
                  optionIdToState={optionIdToState}
                  setShowSelectionViw={setShowSelectionViw}
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
