import React from "react";
import {Container} from "./background-container.styles";

const BackgroundContainer = ({children}) => (
  <Container>
    {children}
  </Container>
);

export default BackgroundContainer;
