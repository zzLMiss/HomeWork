const PATH = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); //css
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");//压缩编译后的css
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    //devtool : "eval-source-map", //调试模式
    //已多次提及的唯一入口文件
    entry : "./src/js/index.js",
    output : {
        filename : "js/bundle.js",   //打包后的文件存放的地方
        path : PATH.resolve(__dirname,"public")  //打包后输出文件的文件名
    },
    devServer : {
        contentBase : "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback : true,//不跳转
        inline : true,//实时刷新
        port : 8888
    },
    module : {
        rules : [ //规则ES6转ES5
            {  
                test : /\.js$/,
                loader : "babel-loader",
                exclude : /node_modules/ //不用编译这个文件
            },
            {
                test : /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: '../'
                      }
                    },
                    "css-loader"
                ]
            },
            {
                test : /\.(png|jpg|jpeg|gif|svg)$/,
                use : ["file-loader?limit=1024&name=./img/[name].[ext]"]
            },
            {
                test : /\.(woff|woff2|eot|ttf|otf)$/,
                use : [
                    "file-loader?limit=1024&name=./fonts/[name].[ext]",
                    "url-loader"
                ]
            },
            {
                test : /\.html$/,
                use : ["html-withimg-loader"]
            }
        ]
    },
    optimization : {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [  //生成一个 HTML5 文件
        new MiniCssExtractPlugin({
            filename:'css/[name].css',
            chunkFilename:'[id].css'
        }),
        new HtmlWebpackPlugin({
            title : "webpack", //窗口名
            template : "./src/index.html", //编译后html文件路径位置
            minify : {
                removeAttributeQuotes : true, //移除属性的引号
                removeComments : true,//去除注释
                removeEmptyAttributes : true,//去除空属性
                collapseWhitespace : true //去除空格
            }
        })
    ] 
    
}