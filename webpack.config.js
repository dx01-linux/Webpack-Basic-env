const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",

    //can have different entries
    entry: {
        app: './src/app.js',
    },
    //dev tool
    devtool: 'inline-source-map',
    
    //dev-server : dependencie must be installed !!!
    devServer: {
        static: './dist',
        watchFiles: ['public/*.html'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template : './public/index.html' ,
            filename : 'index.html' , 
            inject : 'head' ,
            scriptLoading : 'defer' ,
        }),
    ],

    //mang. outputs
    output: {
        //[entry.blunder.js]
        filename: '[name].blunder.js',
        path: path.resolve(__dirname, 'dist'),
        // clear: true,
    },

    module: {
        //webpack going to look for them in directory after you import them in your js as :
        // import "relativePath/filename.js"
        rules: [
            //css
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            //img
            {
                //extensions to look for
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            //fonts
            {
                //extensions to look for
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],

    },

}