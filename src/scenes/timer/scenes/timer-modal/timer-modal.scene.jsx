import React, {useState, useContext} from "react";
import {Container, Row, Col} from "react-bootstrap";
import Timer from "react-compound-timer";
import {BigText, FancyCol, MediumText} from "./timer-modal.styles";
import {RiRestartLine, RiPlayFill, RiPauseFill} from "react-icons/ri";
import {IconContext} from "react-icons";
import {DataContext} from "../../../../contexts/data/data.context";
import {calcTotalSeconds, generateTransitions, formatTime} from "../../../../utils";

const TimerModal = () => {
  const {state} = useContext(DataContext);
  const [timerOn, setTimerOn] = useState(false);

  const transitions = generateTransitions(state);
  const [currTransitionIndex, setTransitionIndex] = useState(0);
  const {label: currLabel, interval: currInterval} = transitions[currTransitionIndex];
  const totalIntervals = parseInt(state.totalRounds.split(' ')[0])

  const totalWorkoutTime = calcTotalSeconds(state) * 1000;

  const formatIntervalTime = time => {
    if (time <= 1) {
      return '00:00';
    }
    const secondsElapsed = (totalWorkoutTime - time)/1000;
    let upcomingTransition = transitions[currTransitionIndex].duration;
    if (secondsElapsed > upcomingTransition) {
      (new Audio("bell.mp3")).play();
      const newTransitionIndex = currTransitionIndex + 1;
      upcomingTransition = transitions[newTransitionIndex].duration;
      setTransitionIndex(newTransitionIndex);
    }
    const secondsLeft = upcomingTransition - secondsElapsed;
    return formatTime(secondsLeft);
  };

  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Timer startImmediately={false} initialTime={totalWorkoutTime} direction='backward'>
          {
            ({start, pause, reset, getTime}) => (
              <Col lg={6}>
                <Row>
                  <FancyCol className='h5 font-weight-bolder'>
                    <Row>
                      <Col>Remaining:</Col>
                      <Col>{formatTime(getTime()/1000)}</Col>
                    </Row>
                  </FancyCol>
                  <FancyCol className='h5 font-weight-bold'>
                    <Row>
                      <Col>Interval:</Col>
                      <Col>{currInterval}/{totalIntervals}</Col>
                    </Row>
                  </FancyCol>
                </Row>
                <Row className='text-center'>
                  <FancyCol>
                    <MediumText>{currLabel}</MediumText>
                    <BigText>{formatIntervalTime(getTime())}</BigText>
                  </FancyCol>
                </Row>
                <Row>
                  <FancyCol lowerPadding>
                    <Row className='text-center'>
                      <Col>
                        <IconContext.Provider value={{ size: '3em', style: {cursor: 'pointer'} }}>
                          <RiRestartLine
                            onClick={() => {
                              pause();
                              reset();
                              setTimerOn(false);
                              setTransitionIndex(0);
                            }}
                          />
                        </IconContext.Provider>
                      </Col>
                      <Col className='border-left'>
                        <IconContext.Provider value={{ size: '3.2em', style: {cursor: 'pointer'}}}>
                          {!timerOn ?
                            (
                              <RiPlayFill
                                onClick={() => {
                                  start();
                                  setTimerOn(true);
                                }}
                              />
                            ) : (
                              <RiPauseFill
                                onClick={() => {
                                  pause();
                                  setTimerOn(false);
                                }}
                              />
                            )
                          }
                        </IconContext.Provider>
                      </Col>
                    </Row>
                  </FancyCol>
                </Row>
              </Col>
            )}
        </Timer>
      </Row>
    </Container>
  )
};

export default TimerModal;
