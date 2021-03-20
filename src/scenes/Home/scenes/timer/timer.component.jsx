import React, {useState, useContext, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import Timer from "react-compound-timer";
import {BigText, FancyCol, MediumText} from "./timer.styles";
import {RiRestartLine, RiPlayFill, RiPauseFill} from "react-icons/ri";
import {IconContext} from "react-icons";
import {DataContext} from "../../../../contexts/data/data.context";
import {calcTotalSeconds, generateTransitions} from "../../../../utils";

const TimerComponent = () => {
  const {state} = useContext(DataContext);
  const [isOn, setIsOn] = useState(false);

  const transitions = generateTransitions(state);
  const [currTransitionIndex, setTransitionIndex] = useState(0);
  const [currLabel, setCurrLabel] = useState(transitions[0].label);

  const initialTime = calcTotalSeconds(state) * 1000;

  const toggle = () => {
    setIsOn(!isOn);
  };

  const formatTimeValue = value => {
    return `${(value < 10 ? `0${value}` : value)}`;
  };

  const formatIntervalTime = time => {
    const secondsElapsed = (initialTime - time)/1000;
    if (secondsElapsed < 1) {
      return '00 : 00';
    }
    let upcomingTransition = transitions[currTransitionIndex].duration;
    if (secondsElapsed > upcomingTransition) {
      const newTransitionIndex = currTransitionIndex + 1;
      upcomingTransition = transitions[newTransitionIndex].duration;
      setTransitionIndex(newTransitionIndex);
    }
    const secondsLeft = upcomingTransition - secondsElapsed;
    const minutes = Math.floor(secondsLeft/60);
    const seconds = Math.floor(secondsLeft%60);
    return `${formatTimeValue(minutes)}:${formatTimeValue(seconds)}`;
  };

  useEffect(() => {
    setCurrLabel(transitions[currTransitionIndex].label);
  }, [currTransitionIndex]);

  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Timer
          startImmediately={false}
          initialTime={initialTime}
          direction='backward'
          formatValue={formatTimeValue}
        >
          {
            ({start, pause, reset, getTime}) => (
              <Col md={6}>
                <Row>
                  <FancyCol className='h5 font-weight-bolder'>
                    <Row>
                      <Col>Remaining:</Col>
                      <Col>
                        <Timer.Minutes/> : <Timer.Seconds/>
                      </Col>
                    </Row>
                  </FancyCol>
                  <FancyCol className='h5 font-weight-bold'>
                    <Row>
                      <Col>Interval:</Col>
                      <Col>1/25</Col>
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
                        <IconContext.Provider
                          value={{ size: '3em', style: {cursor: 'pointer'} }}
                        >
                          <RiRestartLine
                            onClick={() => {
                              pause();
                              reset();
                              setIsOn(false);
                              setTransitionIndex(0);
                            }}
                          />
                        </IconContext.Provider>
                      </Col>
                      <Col className='border-left'>
                        <IconContext.Provider
                          value={{ size: '3.2em', style: {cursor: 'pointer'}}}
                        >
                          {!isOn ? (
                              <RiPlayFill
                                onClick={() => {
                                  start();
                                  toggle();
                                }}
                              />
                            ) : (
                              <RiPauseFill
                                onClick={() => {
                                  pause();
                                  toggle();
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

export default TimerComponent;
