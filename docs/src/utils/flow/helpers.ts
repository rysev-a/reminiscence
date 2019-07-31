import { map, mapObjIndexed, reduce } from 'ramda';

export const computeEffects = actions => message => {
  const action = actions[message.id];
  return action ? action(message) : [];
};

export const mapMessage = mapper => message => ({
  ...message,
  id: mapper[message.id] || message.id,
});

export const mergeActions = (...actions) => {
  const actionsStack: any = {};

  map((moduleActions: any) =>
    mapObjIndexed((action, key) => {
      actionsStack[key] = [...(actionsStack[key] || []), action];
    })(moduleActions)
  )(actions);

  return map(
    (stack: any) => message =>
      reduce((effects, func: any) => [...effects, ...func(message)], [])(stack),
    actionsStack
  );
};
