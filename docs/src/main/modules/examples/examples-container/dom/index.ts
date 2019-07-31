import { mountHtmlElement } from 'utils/effects/html';
import { examplesPageId } from 'main/pages/examples';
import ExamplesContainerHtml from './ExamplesContainerHtml';
import { computeEffects } from 'utils/flow/helpers';

const examplesContainerDomActions = {
  load: () => [mountHtmlElement(examplesPageId, ExamplesContainerHtml())],
};

const examplesContainer = computeEffects(examplesContainerDomActions);

export default examplesContainer;
