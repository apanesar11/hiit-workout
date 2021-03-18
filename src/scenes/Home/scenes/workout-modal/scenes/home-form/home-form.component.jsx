import React from "react";
import constants from "../../workout-modal.constants";
import {Col, Container, Row} from "react-bootstrap";
import WorkoutButton from "../../../../components/workout-button/workout-button.component";
import PillButton from "../../../../components/pill-button/pill-button.component";

const HomeForm = ({ options, optionIdToState, selectOption, totalMinutes }) => (
  <Container>
    <h2 className="font-weight-bolder">{constants.TITLE}</h2>
    <Row className='mt-5 mb-5'>
      {
        options.map((props, id) => {
          const [state] = optionIdToState(props.id);
          return(
            <Col key={'workout-button-'+id} md={6} className='p-0'>
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

export default HomeForm;
