const path = require('path');
const paths = [
  path.resolve(__dirname, '..', '..', "app"),
  path.resolve(__dirname, '..', '..', "components"),
  path.resolve(__dirname, '..', '..', "services")
];

module.exports = {
  context: __dirname,
  entry: '../../services/starter',
  output: {
     publicPath: 'http://localhost:8080/',
     filename: 'build/bundle.js'
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
            'style',
            'css',
            'autoprefixer?browsers=last 3 versions',
            'sass?outputStyle=expanded'
        ],
  	    include: paths
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url?limit=8192',
            'img'
        ],
  	    include: paths
      },
  	  { test: /\.imba/, loader: 'imba-loader', include: paths },
  	  { test: /\.coffee/, loader: 'coffee-loader', include: paths }
    ]
  },
  resolve: {
  extensions: ['', '.js', '.coffee', '.imba'],
    modulesDirectories: [ 'node_modules' ]
  }
};
