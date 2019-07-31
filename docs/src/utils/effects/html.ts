import { Attributes } from 'interfaces';

const html = (tag, attributes: Attributes = null, children = null) => {
  return {
    tag,
    attributes,
    children,
  };
};

export const mountHtmlElement = (target, html) => ({
  plugin: 'dom',
  action: 'mount',
  payload: {
    target,
    html,
  },
});

export const updateHtmlElement = (id, attributes: Attributes) => ({
  plugin: 'dom',
  action: 'update',
  payload: {
    html: html('updatedElement', { id, ...attributes }),
  },
});

export const removeHtmlElement = (id: string) => ({
  plugin: 'dom',
  action: 'remove',
  payload: {
    html: html('removedElement', { id }),
  },
});

export const clearHtmlElement = (id: string) =>
  updateHtmlElement(id, {
    innerHTML: '',
  });

export const moveHtmlElement = (target, id) => ({
  plugin: 'dom',
  action: 'move',
  payload: {
    target,
    html: html('movedElement', { id }),
  },
});

export default html;
