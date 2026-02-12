进程
process.arch
获取你的架构的
process.cwd()
获取当前的工作目录
process.argv
可以获取到执行node命令的信息：
[
  'D:\\nodejs\\node.exe',
  'D:\\code\\nodejs\\os\\process',
  '--kfjr',
  '--american'
]
  可以获取到后面的参数


console.log(process.memoryUsage());
查看内存
/*
{
  rss: 29712384,  进程当前占用的物理内存量，不包括共享内存和页面缓存。它反映了进程实际占用的物理内存大小
  heapTotal: 5861376,  堆总内存
  heapUsed: 4529048,   堆已经使用的内存
  external: 1576909,
  arrayBuffers: 10515   
}
*/
console.log(process.pid);
//这个就是进程的id

//kill方法可以传入这个id然后杀死进程
// setTimeout(()=>{
//     console.log('5秒之后会打印这个');
    
// },5000)
setTimeout(()=>{
    process.exit();
},20000)
// process.on('exit',()=>{
//     console.log('process退出');
    
// })


查看环境变量并且修改，但是这个是暂时的，进程结束会回复
process.env.JAVA_HOME = 'kfjr'
console.log(process.env);


