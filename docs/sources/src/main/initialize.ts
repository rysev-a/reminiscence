import { makeHistoryInit } from 'utils/effects/routing';
import { updateState } from 'utils/effects/state';
import { computeEffects } from 'utils/flow/helpers';

const initializeActions = {
  init: () => [updateState('app', {}), makeHistoryInit()],
};

const initialize = computeEffects(initializeActions);

export default initialize;
