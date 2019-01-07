const PATH = require('path');
module.exports = {
    //编译打包的入口文件
    entry : "./src/index.js",
    //设置出口
    output : {
        path :PATH.resolve(__dirname,"dist"),
        filename:"bundle.js"
    }
}