module.exports = {
    entry: ['babel-polyfill', './src/panelify.js'],
    output: {
        filename: "./dist/panelify.js",
        library: "Panelify",
        libraryTarget: "var"
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};