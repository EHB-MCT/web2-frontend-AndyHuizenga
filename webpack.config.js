const path = require('path');

module.exports = {
    // entry: ['./src/index.js', './src/savedInput.js'],
    entry: {
        index: './src/favoriteDrinks.js',
        input: './src/allDrinks.js'
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
    },
    mode: 'development'
}