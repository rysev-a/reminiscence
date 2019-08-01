import { updateState } from 'utils/effects/state';

const counterStateActions = {
  update: value => {
    return [updateState('counter', value, 'counter.update')];
  },
};

export default counterStateActions;
