const set = (target, value, state) => {
  const keys = target.split('.');

  if (keys.length === 1) {
    return {
      ...state,
      [keys[0]]: value,
    };
  }

  return {
    ...state,
    [keys[0]]: set(keys.slice(1).join('.'), value, state[keys[0]]),
  };
};

let context = {
  prevState: {},
  nextState: {},
};

export const store = (
  { payload: { target, state, action } },
  next,
  appContex
) => {
  context = {
    prevState: { ...context.nextState },
    nextState: set(target, state, context.nextState),
  };

  appContex['store'] = context;

  if (action) {
    next({ id: action });
  }
};
