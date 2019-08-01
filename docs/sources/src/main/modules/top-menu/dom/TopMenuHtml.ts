import classNames from 'classnames';
import { map } from 'ramda';

import html from 'utils/effects/html';
import { navbarBrandClassName, navbarMenuClassName } from './TopMenuStyle';
import { navigateMessage } from 'main/transducers/navigation';

const topMenuLinks = [
  { title: 'Documentation', url: '/reminiscence/documentation' },
  { title: 'Examples', url: '/reminiscence/examples' },
  { title: 'Tutorials', url: '/reminiscence/tutorials' },
  { title: 'Advanced', url: '/reminiscence/advanced' },
  { title: 'Api', url: '/reminiscence/about' },
  { title: 'About', url: '/reminiscence/about' },
];

const TopMenuItemHtml = ({ title, url }) =>
  html('a', {
    className: 'navbar-item',
    innerHTML: title,
    events: {
      click: navigateMessage(url),
    },
  });

const TopMenuHtml = () =>
  html('nav', { className: 'navbar' }, [
    html('a', {
      className: classNames('navbar-brand is-size-4', navbarBrandClassName),
      innerHTML: 'reminiscence',
      events: {
        click: navigateMessage('/'),
      },
    }),
    html(
      'div',
      { className: classNames('navbar-menu', navbarMenuClassName) },
      map(TopMenuItemHtml)(topMenuLinks)
    ),
  ]);

export default TopMenuHtml;
