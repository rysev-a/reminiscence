import { clearHtmlElement } from 'utils/effects/html';
import { computeEffects } from 'utils/flow/helpers';

const devActions = {
  init: () => [clearHtmlElement('app')],
};

const dev = computeEffects(devActions);

export default dev;
