import {DataActionTypes} from "./data.types";

export const updateTotalRounds = rounds => ({
  type: DataActionTypes.TOTAL_ROUNDS,
  payload: rounds
});

export const updateExerciseLength = length => ({
  type: DataActionTypes.EXERCISE_LENGTH,
  payload: length
});

export const updateRecoveryLength = recovery => ({
  type: DataActionTypes.RECOVERY_LENGTH,
  payload: recovery
});

export const updateWarmupLength = warmup => ({
  type: DataActionTypes.WARMUP_LENGTH,
  payload: warmup
});

export const updateCooldownLength = cooldown => ({
  type: DataActionTypes.COOLDOWN_LENGTH,
  payload: cooldown
});
