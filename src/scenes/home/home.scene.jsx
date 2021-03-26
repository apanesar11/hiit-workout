import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import BackgroundContainer from "../../components/background-container/background-container.component";
import WorkoutModule from "./scenes/workout-modal/workout-modal.component";

const Home = () => (
  <>
    <BackgroundContainer>
      <Navbar/>
      <WorkoutModule/>
    </BackgroundContainer>
  </>
);

export default Home;
