const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 3000,
  },
	mode: 'development',
	entry: './resource/js/app.js',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
	output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'app.js'
  },
	resolve: {
    alias: {
			'vue$': 'vue/dist/vue.esm.js'
    }
  }
}