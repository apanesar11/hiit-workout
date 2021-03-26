import styled from "styled-components";

export const Button = styled.div`
  background-color: ${props => props.selected ? '#3863A8' : '#FAFAFA'};
  color: ${props => props.selected ? 'white' : '#3863A8'};
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;
