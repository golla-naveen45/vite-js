const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',

    entry: {
      main: './src/js/main.js',
      style: './src/scss/style.scss'
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      clean: true
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: []
        },

        // ✅ SCSS files only
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass')
              }
            }
          ]
        }
      ]
    },

    plugins: [
      // Extract CSS
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),

      // JS Lint
      new ESLintPlugin({
        overrideConfigFile: path.resolve(__dirname, '.eslintrc.json'),
        context: path.resolve(__dirname, 'src/js'),
        extensions: ['js'],
        failOnError: isProd
      }),

      // SCSS Lint
      new StylelintPlugin({
        configFile: path.resolve(__dirname, '.stylelintrc.json'),
        files: 'src/**/*.scss',
        failOnError: isProd
      })
    ],
    stats: {
      warningsFilter: /legacy JS API/
    },

    // Source maps only in dev
    devtool: isProd ? false : 'source-map'
  };
};
