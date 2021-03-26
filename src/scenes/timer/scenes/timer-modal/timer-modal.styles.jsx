import styled from "styled-components";
import {Col} from "react-bootstrap";

export const FancyCol = styled(Col)`
  background-color: white;
  color: #385AA8;
  border: 1px solid #D5D0D0;
  border-radius: 26px;
  box-shadow: 2px 2px 1px #D5D0D0;
  margin: 1vh 1vh;
  padding: 2vh 0vh;
  ${props => props.lowerPadding ? 'padding: 0.25vh;' : ''}
  cursor: default;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const MediumText = styled.h5`
  font-size: 50px;
  font-weight: 300;
  line-height: 1;
`;

export const BigText = styled.h1`
  font-size: 170px;
  font-weight: 300;
  line-height: 1;
  @media (max-width: 768px) {
    font-size: 120px;
  }
`;
