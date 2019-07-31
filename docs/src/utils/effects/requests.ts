export const makeHttpRequest = (id, url, config = {}) => ({
  plugin: 'http',
  payload: {
    id,
    url,
    ...config,
  },
});

export const configureUrlParams = (urlParams = {}) => {
  return Object.keys(urlParams)
    .map(config => {
      return `${config}=${JSON.stringify(urlParams[config])}`;
    })
    .join('&');
};
