import leftMenuDomActions from './dom';
import { computeEffects } from 'utils/flow/helpers';

const leftMenuActions = {
  load: () => {
    return leftMenuDomActions.mount();
  },
};

const leftMenu = computeEffects(leftMenuActions);

export default leftMenu;
