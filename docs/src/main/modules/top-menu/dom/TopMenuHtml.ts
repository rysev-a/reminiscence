import classNames from 'classnames';
import { map } from 'ramda';

import html from 'utils/effects/html';
import { navbarBrandClassName, navbarMenuClassName } from './TopMenuStyle';
import { navigateMessage } from 'main/transducers/navigation';

const topMenuLinks = [
  { title: 'Documentation', url: '/documentation' },
  { title: 'Examples', url: '/examples' },
  { title: 'Tutorials', url: '/tutorials' },
  { title: 'Advanced', url: '/advanced' },
  { title: 'Api', url: '/about' },
  { title: 'About', url: '/about' },
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
