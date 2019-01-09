const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    path: __dirname,
    // pour que ça fonctionne il ne faut pas de '/' après /mapBuilder (à améliorer ?)
    publicPath: 'jelix/www/getfile?targetmodule=mapBuilder&file=js%2F',
    chunkFilename: '[name].bundle.js',
    filename: 'mapbuilder.js'
  },
  externals: {
      jquery: 'jQuery'
    },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
  ]
};