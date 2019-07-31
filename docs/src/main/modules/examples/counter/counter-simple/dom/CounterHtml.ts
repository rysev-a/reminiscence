import html from 'utils/effects/html';

const CounterHtml = initialValue =>
  html('div', { className: 'counter' }, [
    html('h3', { className: 'is-size-3', innerHTML: 'Simple counter' }),
    html('div', { className: 'buttons' }, [
      html('a', {
        className: 'button is-primary is-small',
        innerHTML: 'increment',
        events: {
          click: { id: 'counter.increment' },
        },
      }),
      html('a', {
        className: 'button is-primary is-small',
        innerHTML: 'decrement',
        events: {
          click: { id: 'counter.decrement' },
        },
      }),
    ]),
    html('div', {
      className: 'tag is-info',
      id: 'counter-value',
      innerHTML: initialValue,
    }),
  ]);

export default CounterHtml;
