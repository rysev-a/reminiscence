import { mountHtmlElement, removeHtmlElement } from 'utils/effects/html';
import ProjectListHtml, { projectListId } from './ProjectListPageHtml';

const projectListPageDomActions = {
  mount: () => {
    return [mountHtmlElement('page', ProjectListHtml())];
  },

  unmount: ({ context }) =>
    context.dom.elements[projectListId]
      ? [removeHtmlElement(projectListId)]
      : [],
};

export default projectListPageDomActions;
