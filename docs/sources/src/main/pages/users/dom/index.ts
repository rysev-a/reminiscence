import { mountHtmlElement, removeHtmlElement } from 'utils/effects/html';
import UserPageHtml from './UserPageHtml';

const userPageDomActions = {
  mount: () => {
    return [mountHtmlElement('page', UserPageHtml())];
  },

  unmount: ({ context }) => {
    return context.dom.elements['users-page']
      ? [removeHtmlElement('users-page')]
      : [];
  },
};

export default userPageDomActions;
