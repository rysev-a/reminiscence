import { style } from 'typestyle';
import classNames from 'classnames';
import html from 'utils/effects/html';
import { generatePage } from 'utils/bootstrap';
import examples from 'main/modules/examples';

export const examplesPageId = 'examples-page';

const examplePageClassName = style({
  display: 'flex',
});

const ExamplesPage = () =>
  html('div', {
    className: classNames('container', examplePageClassName),
    id: examplesPageId,
  });

const examplesPage = generatePage({
  pageHtml: ExamplesPage(),
  pageId: examplesPageId,
  computer: examples,
  routes: {
    '/examples': 'load',
    escape: 'destroy',
  },
});

export default examplesPage;
