import html from 'utils/effects/html';

const LeftMenuHtml = () =>
  html('div', { className: 'left-menu' }, [
    html('aside', { className: 'menu' }, [
      html('p', { className: 'menu-label', innerHTML: 'Simple' }),
      html('ul', { className: 'menu-list' }, [
        html('li', {}, [
          html('a', { innerHTML: 'Counter' }),
          html('a', { innerHTML: 'Tabs' }),
          html('a', { innerHTML: 'Calculate' }),
        ]),
      ]),
      html('p', { className: 'menu-label', innerHTML: 'Http' }),
      html('ul', { className: 'menu-list' }, [
        html('li', {}, [
          html('a', { innerHTML: 'Loading' }),
          html('a', { innerHTML: 'Sorting' }),
          html('a', { innerHTML: 'Filtered' }),
        ]),
        html('li', {}, [
          html('a', { innerHTML: 'Time' }),
          html('ul', {}, [
            html('li', {}, [html('a', { innerHTML: 'Delayed' })]),
            html('li', {}, [html('a', { innerHTML: 'Throttling' })]),
            html('li', {}, [html('a', { innerHTML: 'Debounce' })]),
          ]),
        ]),
      ]),
    ]),
  ]);

export default LeftMenuHtml;
