import { mountHtmlElement } from 'utils/effects/html';
import TopMenuHtml from './TopMenuHtml';

const topMenuDomActions = {
  mount: () => [mountHtmlElement('header-container', TopMenuHtml())],
};

export default topMenuDomActions;
