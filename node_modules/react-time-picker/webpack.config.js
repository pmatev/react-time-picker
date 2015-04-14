module.exports = {
    entry: './index.jsx',
    output: {
        publicPath: 'http://192.168.1.6:9090/assets'
    },
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}