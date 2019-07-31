export const makeHistoryPush = (url, state = null) => ({
  plugin: 'history',
  payload: {
    state,
    url,
  },
});

export const makeHistoryInit = () => ({
  plugin: 'history',
  payload: {
    title: 'init',
  },
});
