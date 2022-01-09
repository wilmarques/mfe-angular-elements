const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (config) => {
  return {
    ...config,
    output: {
      ...config.output,
      uniqueName: 'mfe-web',
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'mfe-web',
      }),
    ],
  };
};
