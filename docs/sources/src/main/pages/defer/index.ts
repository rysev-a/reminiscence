import html from 'utils/effects/html';
import { generatePage } from 'utils/bootstrap';
import defer from 'main/modules/defer';

export const deferPageId = 'defer-page';

const DeferPageHtml = () =>
  html('div', {
    className: 'container',
    id: deferPageId,
  });

const deferPage = generatePage({
  pageHtml: DeferPageHtml(),
  pageId: deferPageId,
  computer: defer,
  routes: {
    '/defer': 'load',
    escape: 'destroy',
  },
});

export default deferPage;
