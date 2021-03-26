import React from "react";
import {Button} from "./select-button.styles";

const SelectButton = ({children, selected, onClick}) => (
  <Button className='mt-1 mb-1' selected={selected} onClick={onClick}>
    {children}
  </Button>
);

export default SelectButton;
