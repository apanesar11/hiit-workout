import React, {useState, useContext, useEffect} from "react";
import constants from "../../workout-modal.constants";
import {Col, Container, Row} from "react-bootstrap";
import WorkoutButton from "../../../../components/workout-button/workout-button.component";
import PillButton from "../../../../components/pill-button/pill-button.component";
import {DataContext} from "../../../../../../contexts/data/data.context";

const HomeForm = ({ options, selectOption }) => {
  const {state} = useContext(DataContext);
  const [totalMinutes, setTotalMinutes] = useState('22 Minutes');

  const calcTotalMins = () => {
    const total = parseInt((
      (state.warmupLength === 'None' ? 0 : parseInt(state.warmupLength.split(' ')[0]) * 60) +
      parseInt(state.totalRounds.split(' ')[0]) * (
        parseInt(state.exerciseLength.split(' ')[0]) +
        parseInt(state.recoveryLength.split(' ')[0])
      ) +
      (state.cooldownLength === 'None' ? 0 : parseInt(state.cooldownLength.split(' ')[0]) * 60)
    )/60);
    setTotalMinutes(`${total} Minutes`);
  };

  useEffect(() => {
    calcTotalMins();
  }, [state]);

  const optionIdToState = id => {
    switch (id) {
      case 'rounds': return state.totalRounds;
      case 'exLength': return state.exerciseLength;
      case 'recLength': return state.recoveryLength;
      case 'warmup': return state.warmupLength;
      case 'cooldown': return state.cooldownLength;
    }
  };

  return (
    <Container>
      <h2 className="font-weight-bolder">{constants.TITLE}</h2>
      <Row className='mt-5 mb-5'>
        {
          options.map((props, id) => {
            const state = optionIdToState(props.id);
            return (
              <Col key={'workout-button-' + id} md={6} className='p-0'>
                <WorkoutButton {...props} subheading={state} onCLick={() => selectOption({...props.selectionData, id: props.id})}/>
              </Col>
            );
          })
        }
      </Row>
      <h3>Total Length: <span className='font-weight-bold'>{totalMinutes}</span></h3>
      <PillButton>Start Practice</PillButton>
    </Container>
  );
};

export default HomeForm;
