const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootPaths = [
  path.join(__dirname, '../src/'),
  path.join(__dirname, '../node_modules/')
];

module.exports = {
  entry: {
    app: './src/app/app.js',
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, '../src/app/actions/'),
      assets: path.resolve(__dirname, '../src/assets/'),
      components: path.resolve(__dirname, '../src/app/components/'),
      config: path.resolve(__dirname, '../src/app/config/'),
      containers: path.resolve(__dirname, '../src/app/containers/'),
      reducers: path.resolve(__dirname, '../src/app/reducers'),
      selectors: path.resolve(__dirname, '../src/app/selectors/'),
      storeConfig: path.resolve(__dirname, '../src/app/store/'),
      utils: path.resolve(__dirname, '../src/utils/')
    },
    extensions: ['.js', '.jsx', '.json', '.selectors.js', '.actions.js', '.reducer.js', '.conf.js', '.const.js', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader', options: { includePaths: rootPaths } }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.(ttf|eot|svg|png)$/,
        use: 'file-loader'
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader"
      },
    ],
  },
  plugins: []
};
