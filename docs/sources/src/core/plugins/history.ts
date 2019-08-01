const context = {
  currentUrl: '',
};

const pushMessage = (next, url = window.location.pathname) => {
  if (context.currentUrl !== url) {
    context.currentUrl = url;

    next({
      id: 'history.update',
      data: url,
    });
  }
};

export const history = ({ payload }, next, appContext) => {
  if (payload.title && payload.title === 'init') {
    window.addEventListener('popstate', () => pushMessage(next));
  }

  const { state, url } = payload;
  window.history.pushState(state, '', url);
  pushMessage(next, url);

  appContext['history'] = context;
};
