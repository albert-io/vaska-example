const path = require('path');

module.exports = {
    entry: {
        app: [
            path.join(__dirname, 'simple/simple.js')
        ]
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'simple.bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react' ]
                }
            }
        ]
    }
};
