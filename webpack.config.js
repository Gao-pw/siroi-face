const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: "SiroiFace",
    libraryTarget:"var"
  },
  mode:'production'
};