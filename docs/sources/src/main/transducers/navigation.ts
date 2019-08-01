import { makeHistoryPush } from 'utils/effects/routing';
import { computeEffects } from 'utils/flow/helpers';

const navigationTransducer = {
  navigate: ({ data }) => {
    return [makeHistoryPush(data)];
  },
};

export const navigateMessage = url => ({ id: 'navigate', data: url });

export default computeEffects(navigationTransducer);
