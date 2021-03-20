import {UiActionTypes} from "./ui.types";

const UiContextReducer = (state, action) => {
  switch(action.type) {
    case UiActionTypes.SHOW_TIMER:
      return {
        ...state,
        showTimer: action.payload
      };
    default:
      return state;
  }
}

export default UiContextReducer;
