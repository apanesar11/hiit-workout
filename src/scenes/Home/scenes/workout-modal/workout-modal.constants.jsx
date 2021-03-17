import React from "react";
import {AiOutlineClockCircle} from "react-icons/ai";
import {FiSun} from "react-icons/fi";
import {BiMoon} from "react-icons/bi";

const constants = {
  TITLE: 'Create Your HIIT Workout',
  OPTIONS: [
    {
      id: 'rounds',
      icon: <AiOutlineClockCircle/>,
      heading: 'Total Rounds',
      selectionData: {
        heading: 'Total Rounds',
        subheading: 'Enter the total number of high intensity intervals you would like to do',
        options: [
          '5 Rounds',
          '10 Rounds',
          '15 Rounds',
          '20 Rounds',
          '25 Rounds',
          '35 Rounds',
          '40 Rounds',
          '45 Rounds',
          '50 Rounds',
          '100 Rounds'
        ]
      }
    },
    {
      id: 'exLength',
      icon: <AiOutlineClockCircle/>,
      heading: 'Exercise Length',
      selectionData: {
        heading: 'How long do you want to do each exercise?',
        subheading: 'Length of time you will do each individual exercise',
        options: [
          '10 Seconds',
          '15 Seconds',
          '20 Seconds',
          '25 Seconds',
          '30 Seconds',
          '40 Seconds',
          '50 Seconds',
          '60 Seconds',
          '90 Seconds',
          '120 Seconds'
        ]
      }
    },
    {
      id: 'recLength',
      icon: <AiOutlineClockCircle/>,
      heading: 'Recovery',
      selectionData: {
        heading: 'How long do you want to rest between each exercise?',
        subheading: 'Length of time you will rest in between exercises',
        options: [
          '5 Seconds',
          '10 Seconds',
          '15 Seconds',
          '20 Seconds',
          '25 Seconds',
          '30 Seconds',
          '40 Seconds',
          '50 Seconds',
          '60 Seconds',
          '90 Seconds'
        ]
      }
    },
    {
      id: 'warmup',
      icon: <FiSun/>,
      heading: 'Warmup',
      selectionData: {
        heading: 'Warmup',
        subheading: 'Your warmup is included within your total workout time',
        options: [
          'None',
          '1 Minute',
          '2 Minutes',
          '3 Minutes',
          '4 Minutes',
          '5 Minutes'
        ]
      }
    },
    {
      id: 'cooldown',
      icon: <BiMoon/>,
      heading: 'Cooldown',
      selectionData: {
        heading: 'Cooldown',
        subheading: 'The cooldown time is included within your total workout time\n',
        options: [
          'None',
          '1 Minute',
          '2 Minutes',
          '3 Minutes',
          '4 Minutes',
          '5 Minutes'
        ]
      }
    }
  ]
};

export default constants;
