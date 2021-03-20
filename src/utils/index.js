export const calcTotalSeconds = state => {
  return parseInt(
    (state.warmupLength === 'None' ? 0 : parseInt(state.warmupLength.split(' ')[0]) * 60) +
    parseInt(state.totalRounds.split(' ')[0]) * (
      parseInt(state.exerciseLength.split(' ')[0]) +
      parseInt(state.recoveryLength.split(' ')[0])
    ) +
    (state.cooldownLength === 'None' ? 0 : parseInt(state.cooldownLength.split(' ')[0]) * 60)
  );
};

export const generateTransitions = state => {
  const transitions = [{duration: 0}];
  if (state.warmupLength !== 'None') {
    const length = parseInt(state.warmupLength.split(' ')[0]) * 60;
    transitions.push({
      duration: length,
      label: 'WARMUP'
    });
  }
  const rounds = parseInt(state.totalRounds.split(' ')[0]);
  const exLen = parseInt(state.exerciseLength.split(' ')[0]);
  const recLen = parseInt(state.recoveryLength.split(' ')[0]);
  for (let i = 0; i < rounds; i++) {
    const prevTime = transitions[transitions.length - 1].duration;
    transitions.push({
      duration: prevTime + exLen,
      label: 'EXERCISE INTERVAL'
    });
    transitions.push({
      duration: prevTime + exLen + recLen,
      label: 'REST INTERVAL'
    });
  }
  if (state.cooldownLength !== 'None') {
    const length = parseInt(state.cooldownLength.split(' ')[0]) * 60;
    const prevTime = transitions[transitions.length - 1].duration;
    transitions.push({
      duration: prevTime + length,
      label: 'COOLDOWN'
    });
  }
  return transitions.slice(1, transitions.length);
};
