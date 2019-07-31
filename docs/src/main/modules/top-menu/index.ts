import topMenuDomActions from './dom';
import { computeEffects } from 'utils/flow/helpers';

const topMenuActions = {
  init: () => {
    return topMenuDomActions.mount();
  },
};

const topMenu = message => computeEffects(topMenuActions)(message);

export default topMenu;
