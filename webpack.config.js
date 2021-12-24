const path = require('path');

module.exports = {
    // entry: ['./src/index.js', './src/savedInput.js'],
    entry: {
        favoriteDrinks: './src/favoriteDrinks.js',
        allDrinks: './src/allDrinks.js'
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
    },
    mode: 'development',

    devServer: {

        host: '0.0.0.0',

        publicPath: '/docs/',

        contentBase: path.resolve(__dirname, "../scr"),

        watchContentBase: true,
        compress: true,
        port: 9001

    }

}