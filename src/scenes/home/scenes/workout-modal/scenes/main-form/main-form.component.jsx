import React, {useState, useContext, useEffect} from "react";
import Link from "next/link";
import constants from "../../workout-modal.constants";
import {Col, Container, Row} from "react-bootstrap";
import WorkoutButton from "../../../../components/workout-button/workout-button.component";
import PillButton from "../../../../components/pill-button/pill-button.component";
import {DataContext} from "../../../../../../contexts/data/data.context";
import {calcTotalSeconds, formatTime} from "../../../../../../utils";

const MainForm = ({ options, selectOption }) => {
  const {state} = useContext(DataContext);
  const [totalMinutes, setTotalMinutes] = useState('22 Minutes');

  useEffect(() => {
    const totalSeconds = calcTotalSeconds(state);
    const totalTime =  formatTime(totalSeconds);
    setTotalMinutes(totalTime);
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
      <Row className='mt-2 mb-2 mt-lg-5 mb-lg-5'>
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
      <Link href="/timer">
        <PillButton>Start Practice</PillButton>
      </Link>
    </Container>
  );
};

export default MainForm;
