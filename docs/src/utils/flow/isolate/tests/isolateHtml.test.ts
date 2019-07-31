import { expect } from 'chai';
import html from 'utils/html';
import isolateHtml from '../isolateHtml';

const testHtml = html('div', {
  id: 'module',
  events: {
    click: {
      id: 'module.load',
    },
  },
});

const scope = 'app';

describe('Isolate html', () => {
  it('Isolate html id', () => {
    const isolatedHtml = isolateHtml(scope)(testHtml);
    expect(isolatedHtml.attributes.id).to.equal('app.module');
  });

  it('Isolate html events', () => {
    const isolatedHtml = isolateHtml(scope)(testHtml);
    expect(isolatedHtml.attributes.events.click.id).to.equal('app.module.load');
  });
});
