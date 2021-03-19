import {DataActionTypes} from "./data.types";

const DataContextReducer = (state, action) => {
  switch(action.type) {
    case DataActionTypes.TOTAL_ROUNDS:
      return {
        ...state,
        totalRounds: action.payload
      };
    case DataActionTypes.EXERCISE_LENGTH:
      return {
        ...state,
        exerciseLength: action.payload
      };
    case DataActionTypes.RECOVERY_LENGTH:
      return {
        ...state,
        recoveryLength: action.payload
      };
    case DataActionTypes.WARMUP_LENGTH:
      return {
        ...state,
        warmupLength: action.payload
      };
    case DataActionTypes.COOLDOWN_LENGTH:
      return {
        ...state,
        cooldownLength: action.payload
      };
    default:
      return state;
  }
}

export default DataContextReducer;
