const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
entry : {
        script : './src/script.ts', //judul script: u/ chunks
        suit : './src/suitGame.ts',
        number : './src/guessNumber.ts',
        clicker : './src/clickerGame.ts',
        catch : './src/catchObject.ts',
        match : './src/matchPair.ts'
    },
output : {
        filename : '[name].bundle.js', 
        path : path.resolve(__dirname, 'dist'),
    },
resolve: {
    extensions: ['.ts', '.js'], //cek ada file TS dulu, baru cek JS
  },
module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
      // untuk load ts
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/[name][ext]' }
      },
      // untuk asset
    ]
  },
plugins : [
        // new CleanWebpackPlugin({
        //   cleanOnceBeforeBuildPatterns: [
        //   '**/*',
        //   '!static-files*',
        //   '!directoryToExclude/**',],
        // }), //buat folder dst hanya dimemori saja, tidak disimpan filenya di komp
        new HtmlWebpackPlugin({
            template : './src/index.html',
            filename : 'index.html',
            chunks: ['script'] //supaya tidak gabung dengan js lain
        }),
        new HtmlWebpackPlugin({
            template : './src/suit-game.html',
            filename : 'suit-game.html',
            chunks: ['suit'] //supaya tidak gabung dengan js lain
        }),
        new HtmlWebpackPlugin({
            template : './src/guess-number.html',
            filename : 'guess-number.html',
            chunks: ['number']
        }),
        new HtmlWebpackPlugin({
            template : './src/clicker-game.html',
            filename : 'clicker-game.html',
            chunks: ['clicker']
        }),
        new HtmlWebpackPlugin({
            template : './src/catch-object.html',
            filename : 'catch-object.html',
            chunks: ['catch']
        }),
        new HtmlWebpackPlugin({
            template : './src/match-pair.html',
            filename : 'match-pair.html',
            chunks: ['match']
        }),
    // Copy static folders (css & assets) ke dist/
    new CopyWebpackPlugin({
      patterns: [
        { from: 'css', to: 'css' },
        { from: 'assets', to: 'assets' },
      ]
    })
    ],

devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true
  },
mode: 'development',
devtool: 'source-map',
optimization: { splitChunks: { chunks: 'all' } } //untuk split kode agar tidak jadi 1 budle besar
};