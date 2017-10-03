import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {

  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
    
  },

  devtool: 'inline-source-map',
  
  devServer: {
    contentBase: "./build",
    compress: true,
    port: 3000
  },
  

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },



  module: {
    rules: [
      {
        test: /\.scss?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
      },
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader'
      },
     
    ]
  },

  //Dev server
  // module: {
  //     rules: [{
  //         test: /\.scss$/,
  //         use: [{
  //             loader: "style-loader" // creates style nodes from JS strings
  //         }, {
  //             loader: "css-loader" // translates CSS into CommonJS
  //         }, {
  //             loader: "sass-loader" // compiles Sass to CSS
  //         }]
  //     }]
  // }

};

export default config;
