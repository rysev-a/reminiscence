import { mountHtmlElement, updateHtmlElement } from 'utils/effects/html';
import CounterHtml from './CounterHtml';
import { ExamplesContainerId } from '../../../examples-container/dom/ExamplesContainerHtml';

const counterDomActions = {
  mount: initialValue => [
    mountHtmlElement(ExamplesContainerId, CounterHtml(initialValue)),
  ],
  update: value => [updateHtmlElement('counter-value', { innerHTML: value })],
};

export default counterDomActions;
