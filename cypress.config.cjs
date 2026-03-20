const {path} = require('path')
const { defineConfig } = require('cypress')
const { devServer } = require('cypress-rspack-dev-server')

module.exports = defineConfig({
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: 'react',
        rspackConfig: require('./rspack.config.mjs'),
      });
    },
  },
});
