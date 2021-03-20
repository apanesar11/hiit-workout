import {UiActionTypes} from "./ui.types";

export const setShowTimer = bool => ({
  type: UiActionTypes.SHOW_TIMER,
  payload: bool
});
