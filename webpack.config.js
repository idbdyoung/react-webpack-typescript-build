const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname),
  entry: {
    index: './index.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
  },
  plugins: []
};
