import React, {useContext} from "react";
import {Container} from "react-bootstrap";
import SelectButton from "../../../../components/select-button/select-button.component";
import PillButton from "../../../../components/pill-button/pill-button.component";
import {DropDown} from "./selection.form.styles";
import {
  updateTotalRounds,
  updateExerciseLength,
  updateRecoveryLength,
  updateWarmupLength,
  updateCooldownLength
} from "../../../../../../contexts/data/data.actions";
import {DataContext} from "../../../../../../contexts/data/data.context";

const SelectionForm = ({ data, setShowSelectionViw }) => {
  const {state, dispatch} = useContext(DataContext);
  const optionIdToStateAction = id => {
    switch (id) {
      case 'rounds': return [state.totalRounds, updateTotalRounds];
      case 'exLength': return [state.exerciseLength, updateExerciseLength];
      case 'recLength': return [state.recoveryLength, updateRecoveryLength];
      case 'warmup': return [state.warmupLength, updateWarmupLength];
      case 'cooldown': return [state.cooldownLength, updateCooldownLength];
    }
  };
  const [currentOption, updateOption] = optionIdToStateAction(data.id);
  return (
    <Container>
      <h2 className='font-weight-bolder'>{data.heading}</h2>
      <h5>{data.subheading}</h5>
      <DropDown className='mt-4 mb-5'>
        {
          data.options.map((option, id) => (
            <SelectButton
              key={option+id}
              selected={option === currentOption}
              onClick={() => dispatch(updateOption(option))}
            >{option}</SelectButton>
          ))
        }
      </DropDown>
      <PillButton onClick={() => setShowSelectionViw(false)}>SELECT</PillButton>
    </Container>
  );
};

export default SelectionForm;