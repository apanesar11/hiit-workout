import React, {useContext} from "react";
import Navbar from "../../components/navbar/navbar.component";
import {Content} from "./home.styles";
import WorkoutModule from "./scenes/workout-modal/workout-modal.component";
import {UiContext} from '../../contexts/ui/ui.context';
import Timer from "./scenes/timer/timer.component";

const Home = () => {
  const {state} = useContext(UiContext);
  return(
    <>
      <Navbar/>
      <Content>
        {!state.showTimer ? <WorkoutModule/> : <Timer/>}
      </Content>
    </>
  );
};

export default Home;
