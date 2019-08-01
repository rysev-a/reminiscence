import { mountHtmlElement, removeHtmlElement } from 'utils/effects/html';
import CounterPageHtml, { counterPageId } from './CounterPageHtml';

const counterPageDomActions = {
  mount: () => [mountHtmlElement('page', CounterPageHtml())],
  unmount: () => [removeHtmlElement(counterPageId)],
};

export default counterPageDomActions;
