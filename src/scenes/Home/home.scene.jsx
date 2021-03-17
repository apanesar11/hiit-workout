import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import {Content} from "./home.styles";
import WorkoutModule from "./scenes/workout-modal/workout-modal.component";

const Home = () => (
  <>
    <Navbar/>
    <Content>
      <WorkoutModule/>
    </Content>
  </>
);

export default Home;
