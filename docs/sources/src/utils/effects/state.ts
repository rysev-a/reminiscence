export const updateState = (target, state, action = null) => ({
  plugin: 'store',
  action: 'update',
  payload: {
    target,
    state,
    action,
  },
});
