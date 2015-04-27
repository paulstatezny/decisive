var Webpack           = require('webpack');
var HtmlWebpack       = require('html-webpack-plugin');
var path              = require('path');

var environment = (process.env.APP_ENV || 'development');
var npmPath     = path.resolve(__dirname, 'node_modules');

var config      = {
    entry    : ['./application/bootstrap.js'],
    plugins  : [
        new HtmlWebpack({template : './application/index.html'}),
        new Webpack.DefinePlugin({
            __BACKEND__     : process.env.BACKEND ? '\'' + process.env.BACKEND + '\'' : undefined,
            __ENVIRONMENT__ : '\'' + environment + '\''
        })
    ],
    reactLoaders : ['jsx']
};

if (environment === 'development') {
    config.entry = [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:9000'
    ].concat(config.entry);

    config.reactLoaders = ['react-hot'].concat(config.reactLoaders);

    config.plugins.push(new Webpack.HotModuleReplacementPlugin());
}

if (environment !== 'production') {
    config.devtools = '#inline-source-map';
}

module.exports = {
    name   : 'browser bundle',
    entry  : config.entry,
    output : {
        filename   : 'app.js',
        path       : path.resolve(__dirname, 'build'),
        publicPath : '/'
    },
    module : {
        preLoaders : [
            {
                test    : /\.js$/,
                loader  : 'jshint-loader',
                exclude : npmPath
            },
            {
                test    : /\.jsx$/,
                loader  : 'jsxhint-loader',
                exclude : npmPath
            }
        ],
        loaders : [
            {
                test   : /\.(eot|ico|ttf|woff|woff2)$/,
                loader : 'file-loader',
                query  : {name : '[path][name].[ext]'}
            },
            {
                test    : /\.jsx$/,
                loaders : config.reactLoaders,
                exclude : npmPath
            },
            {
                test    : /\.(gif|jpe?g|png|svg)$/i,
                loaders : ['image?bypassOnDebug&optimizationLevel=7&interlaced=false']
            },
            {
                test    : /\.css$/,
                loaders : ['style', 'css']
            }
        ]
    },
    plugins : config.plugins,
    resolve : {
        extensions : ['', '.css', '.js', '.json', '.jsx']
    },
    devtool : config.devtools,
    jshint  : {
        globalstrict : true,
        globals      : {
            __BACKEND__     : true,
            __ENVIRONMENT__ : true,
            console         : true,
            window          : true
        }
    }
};
