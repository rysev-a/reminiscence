const context = {
  elements: {},
};

const applyAttributes = ($element, html) => {
  if (html.attributes && html.tag !== 'textNode') {
    Object.keys(html.attributes).map(key => {
      if (key !== 'events') {
        $element[key] = html.attributes[key];
      }
    });
  }
};

const registerEvents = ($element, html, next) => {
  if (html.attributes && html.attributes.events) {
    Object.keys(html.attributes.events).map(event => {
      $element.addEventListener(event, () => {
        next(html.attributes.events[event]);
      });
    });
  }
};

const createElement = html => {
  if (html.tag === 'textNode') {
    return document.createTextNode(html.attributes.innerHTML);
  }

  return document.createElement(html.tag);
};

const mount = ({ html, $parent = null, target = '' }, next, context) => {
  const $node = $parent || document.getElementById(target);
  const $element = createElement(html);
  applyAttributes($element, html);
  registerEvents($element, html, next);

  if (html.children) {
    html.children.map(child => {
      mount({ $parent: $element, html: child }, next, context);
    });
  }

  if (html.attributes && html.attributes.id) {
    context.elements[html.attributes.id] = $element;
  }

  $node.appendChild($element);
};

const remove = ({ html }, _, context) => {
  const $element = document.getElementById(html.attributes.id);
  $element.remove();
  if (html.attributes && html.attributes.id) {
    delete context.elements[html.attributes.id];
  }
};

const move = ({ html, target }) => {
  const $element = document.getElementById(html.attributes.id);
  const $target = document.getElementById(target);
  $target.appendChild($element);
};

const update = ({ html }) => {
  const $element = document.getElementById(html.attributes.id);
  applyAttributes($element, html);
};

const domActions = {
  mount,
  remove,
  move,
  update,
};

export const dom = (effect, next, appContext) => {
  const actionHandler = domActions[effect.action];
  actionHandler(effect.payload, next, context);
  appContext['dom'] = context;
};
