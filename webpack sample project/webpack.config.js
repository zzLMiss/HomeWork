const PATH = require('path');
module.exports = {
    devtool: 'eval-source-map',
    entry : "./app/main.js",
    output : {
        path : PATH.resolve(__dirname,"public"),
        filename : "bundle.js"
    },
    devServer:{
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback:true,//不跳转
        inline:true,//实时刷新
        port:8888 //端口
    }
}
