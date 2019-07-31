import { mountHtmlElement } from 'utils/effects/html';
import LeftMenuHtml from './LeftMenuHtml';
import { examplesPageId } from 'main/pages/examples';

const leftMenuDomActions = {
  mount: () => [mountHtmlElement(examplesPageId, LeftMenuHtml())],
};

export default leftMenuDomActions;
