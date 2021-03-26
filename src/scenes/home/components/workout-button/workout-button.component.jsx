import React from "react";
import {Button} from "./workout-button.styles";
import {IconContext} from "react-icons";

const WorkoutButton = ({ icon, heading, subheading, onCLick }) => (
  <Button className='m-2 text-left' onClick={onCLick}>
    <IconContext.Provider value={{ size: '1.4em', className: 'pb-1' }}>
      <span>{icon}</span>
    </IconContext.Provider>
    <span className={'ml-2'}>{heading}</span>
    <div className='font-weight-bold'>{subheading}</div>
  </Button>
);

export default WorkoutButton;
