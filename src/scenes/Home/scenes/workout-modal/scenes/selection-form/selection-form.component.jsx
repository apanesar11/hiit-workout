import React from "react";
import {Container} from "react-bootstrap";
import SelectButton from "../../../../components/select-button/select-button.component";
import PillButton from "../../../../components/pill-button/pill-button.component";
import {DropDown} from "./selection.form.styles";

const SelectionForm = ({ data, optionIdToState, setShowSelectionViw }) => {
  const [state, updateState] = optionIdToState(data.id);
  return (
    <Container>
      <h2 className='font-weight-bolder'>{data.heading}</h2>
      <h5>{data.subheading}</h5>
      <DropDown className='mt-4 mb-5'>
        {
          data.options.map((option, id) => (
            <SelectButton
              key={option+id}
              selected={option === state}
              onClick={() => updateState(option)}
            >{option}</SelectButton>
          ))
        }
      </DropDown>
      <PillButton onClick={() => setShowSelectionViw(false)}>SELECT</PillButton>
    </Container>
  );
};

export default SelectionForm;