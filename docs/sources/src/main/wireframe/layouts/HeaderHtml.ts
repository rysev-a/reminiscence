import classNames from 'classnames';
import html from 'utils/effects/html';
import { headerClassName } from './HeaderStyle';

const HeaderHtml = () =>
  html('header', { className: classNames('header', headerClassName) }, [
    html('div', { className: 'container', id: 'header-container' }),
  ]);

export default HeaderHtml;
