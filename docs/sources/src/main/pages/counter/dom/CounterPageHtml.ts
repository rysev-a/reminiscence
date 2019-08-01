import html from 'utils/effects/html';

export const counterPageId = 'counter.page.id';

const CounterPageHtml = () =>
  html('div', {}, [html('div', { className: 'container', id: counterPageId })]);

export default CounterPageHtml;
