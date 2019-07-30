const context = {
  timeouts: {},
  intervals: {},
};

const startTimeout = ({ timeoutId, delay, message }, next) => {
  const timeout = setTimeout(() => {
    next(message);
    delete context.timeouts[timeoutId];
  }, delay);

  context.timeouts[timeoutId] = timeout;
};

const stopTimeout = timeoutId => {
  clearTimeout(context.timeouts[timeoutId]);
  delete context.timeouts[timeoutId];
};

const startInterval = ({ id, delay, message }, next) => {
  const interval = setInterval(() => {
    next(message);
  }, delay);

  context.intervals[id] = interval;
};

const stopInterval = id => {
  clearInterval(context.intervals[id]);
  delete context.intervals[id];
};

const timeActions = { startInterval, startTimeout, stopInterval, stopTimeout };

export const time = (effect, next, appContext) => {
  const actionHandler = timeActions[effect.action];
  actionHandler(effect.payload, next);
  appContext['time'] = context;
};
