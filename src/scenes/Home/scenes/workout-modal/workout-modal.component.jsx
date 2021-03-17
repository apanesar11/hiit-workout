import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Modal} from "./workout-modal.styles";

import constants from "./workout-modal.constants";
import WorkoutButton from "../../components/workout-button/workout-button.component";
import PillButton from "../../components/pill-button/pill-button.component";
import SelectionForm from "../selection-form/selection-form.component";

const WorkoutModule = () => {
  const [rounds, setRounds] = useState('20 Rounds');
  const [exLength, setExLength] = useState('50 Seconds');
  const [recLength, setRecLength] = useState('10 Seconds');
  const [warmup, setWarmup] = useState('1 Minute');
  const [cooldown, setCooldown] = useState('1 Minute');
  const [total, setTotal] = useState('22 Minutes');

  const [showSelectionViw, setShowSelectionViw] = useState(false);
  const [selectionData, setSelectionData] = useState(null);

  const optionIdToState = id => {
    switch (id) {
      case 'rounds': return [rounds, setRounds];
      case 'exLength': return [exLength, setExLength];
      case 'recLength': return [recLength, setRecLength];
      case 'warmup': return [warmup, setWarmup];
      case 'cooldown': return [cooldown, setCooldown];
    }
  };

  const makeSelection = data => {
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
                <Container>
                  <h2 className="font-weight-bolder">{constants.TITLE}</h2>
                  <Row className='mt-5 mb-5'>
                    {
                      constants.OPTIONS.map((props, id) => {
                        const [state] = optionIdToState(props.id);
                        return(
                          <Col key={'workout-button-'+id} md={6} className='p-0'>
                            <WorkoutButton {...props} subheading={state} onCLick={() => makeSelection({...props.selectionData, id: props.id})}/>
                          </Col>
                        );
                      })
                    }
                  </Row>
                  <h3>Total Length: <span className='font-weight-bold'>{total}</span></h3>
                  <PillButton>Start Practice</PillButton>
                </Container>
              ) : (
                <Container>
                  <SelectionForm
                    data={selectionData}
                    optionIdToState={optionIdToState}
                    setShowSelectionViw={setShowSelectionViw}
                  />
                </Container>
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
