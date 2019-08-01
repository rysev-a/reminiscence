import { lensPath, view, set, map, pipe } from 'ramda';

// id getter and setter
const getPropLens = propPath => ({
  setter: set(lensPath(propPath)),
  getter: view(lensPath(propPath)),
});

const isolateId = scope => id => `${scope}.${id}`;

const isolateEvent = scope => eventMessage => ({
  ...eventMessage,
  id: isolateId(scope)(eventMessage.id),
});

const isolateEventList = scope => map(isolateEvent(scope));

const isolateHtmlAttribute = scope => attributeKey => isolateFunc => html => {
  const { getter, setter } = getPropLens(['attributes', attributeKey]);
  const isolateAttribute = getter(html);

  const withUpdatedAttributes = isolateAttribute
    ? setter(isolateFunc(scope)(isolateAttribute), html)
    : html;

  const isolateChild = isolateHtmlAttribute(scope)(attributeKey)(isolateFunc);

  const withIsolatedChildren = html.children
    ? { children: map(isolateChild)(html.children) }
    : {};

  return {
    ...withUpdatedAttributes,
    ...withIsolatedChildren,
  };
};

const isolateHtml = scope =>
  pipe(
    isolateHtmlAttribute(scope)('id')(isolateId),
    isolateHtmlAttribute(scope)('events')(isolateEventList)
  );

export default isolateHtml;
