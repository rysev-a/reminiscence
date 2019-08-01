import html from 'utils/effects/html';

export const ExamplesContainerId = 'examples-container';

const ExamplesContainerHtml = () =>
  html('div', { className: 'examples' }, [
    html('h1', { className: 'is-size-1 is-title', innerHTML: 'Examples' }),
    html('div', { className: 'examples-container', id: ExamplesContainerId }),
  ]);

export default ExamplesContainerHtml;
