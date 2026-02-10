# 指令

npm install
npm config list
npm get registry
npm login
npm publish
-g 是全局安装，就是安装到你本地了，下次要用的时候，可以直接在本地引入
--save
**-dev** 是安装到开发者依赖里面

三个依赖的不同：

```

"dependencies": {
        "md5": "^2.3.0"
      },
      "devDependencies": {
        "webpack": "^5.105.0"
      },
      "peerDependencies":{

      }
```

**dependencies**是开发和生产都要用的依赖，比如vue，做出来的网页都要用
**devDependencies**是开发依赖，比如说webpack，只用来打包的
**peerDependencies**是同辈依赖，意思是什么呢？比如使用vue，它里面用到了其他依赖，那你安装了使用vue，这里也应该安装一下


npx大概的意思是，原本使用包需要你npm下载下来，而npx可以在下载后删除然后使用


模块化
nodejs也有模块化的，但是分两种：commonjs和es6（module）的，在这个package.json配置一下type就能选择
commonjs：
支持五种模式
1、引入自己编写的模块
 require('./print.js');
2、引入下载的模块
 const md5 = require('md5');
 console.log(md5(1234567)); //498001217bc632cb158588224d7d23c4
3、引入node的内置模块  fs 等等
 const fs = require('node:fs')  //高版本可以用node:fs做一个区分作用
 const txt = fs.readFileSync('./a.txt').toString();
 console.log(txt);
4、引入c++模块
5、引入json文件
 const json = require('./data.json');
 console.log(json);


module呢就不支持c++了，而且动态加载需要用函数的方式：
```
if(true){
    import('./test.js').then(res=>{
        console.log(res);
        
    })
}

```

两者的不同：
Cjs是基于运行时的同步加载，esm是基于编译时的异步加载
Cjs是可以修改值的，esm值并且不可修改（可读的）
Cjs不可以tree shaking，esm支持tree shaking
commonjs中顶层的this指向这个模块本身，而ES6中顶层this指向undefined


发布的时候，在package.json里面可以定义要发布的文件
