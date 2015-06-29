var path = require('path');


require('Dobin')
//静态资源根目录
.setPath("APP_PATH", __dirname + '/App')
//网站根目录
.setPath("RESOURCE_PATH", __dirname + '/Asset')
//开启调试模式，线上环境需要关闭调试功能
.setPath("APP_DEBUG",true)
.run();

