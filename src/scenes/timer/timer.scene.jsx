import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import BackgroundContainer from "../../components/background-container/background-container.component";
import TimerModal from "./scenes/timer-modal/timer-modal.scene";

const Timer = () => (
  <>
    <BackgroundContainer>
      <Navbar/>
      <TimerModal/>
    </BackgroundContainer>
  </>
);

export default Timer;
