const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ce\.vue$/,
        loader: 'vue-loader',
        options: {
          customElement: true
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};