const context = {
  requests: [],
};

export const http = ({ payload }, next, appContext) => {
  fetch(payload.url, payload).then(response => {
    if (response.status === 200) {
      response.json().then(data => {
        const message = {
          id: `http.${payload.id}.success`,
          data: {
            response: {
              ...response,
              data,
            },
          },
        };
        next(message);
      });
    } else {
      next({
        id: `http.${payload.id}.error`,
        data: response,
      });
    }
  });

  appContext['http'] = context;
};
