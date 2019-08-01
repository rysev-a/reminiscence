import counterDomActions from './dom';
import { computeEffects } from 'utils/flow/helpers';
import counterStateActions from './state';

const counterActions = {
  load: ({
    context: {
      store: { nextState },
    },
  }) => {
    const initialValue = nextState.counter || 0;

    return [
      ...counterDomActions.mount(initialValue),
      ...counterStateActions.update(initialValue),
    ];
  },
  'counter.increment': message => {
    const nextCounterValue = message.context.store.nextState.counter + 1;
    return counterStateActions.update(nextCounterValue);
  },
  'counter.decrement': message => {
    const nextCounterValue = message.context.store.nextState.counter - 1;
    return counterStateActions.update(nextCounterValue);
  },
  'counter.update': ({ context }) => {
    const counterValue = context.store.nextState.counter;
    return counterDomActions.update(counterValue);
  },
};

const counterSimple = computeEffects(counterActions);

export default counterSimple;
