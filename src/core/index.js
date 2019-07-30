export const run = (plugins, main) => {
  const context = {};

  Object.keys(plugins).map(pluginKey => {
    context[pluginKey] = {};
  });

  const next = message => {
    const effects = main({ ...message, context });

    effects.map(effect => {
      const plugin = plugins[effect.plugin];
      plugin(effect, next, context);
    });
  };

  next({ id: 'init' });
};
