import styled from "styled-components";
import background from "../../assets/background.png";

export const Container = styled.div`
    position: absolute;
    background-image: url(${background});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;
