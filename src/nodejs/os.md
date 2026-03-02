os
os是node用来操作操作系统的一个api
可以用来获取操作系统的一些数据
console.log(os.type());//Windows_NT
这个是获取操作系统的类型的



1. console.log(os.platform());//win32
平台

2. console.log(os.release());//10.0.22631
系统版本
3. console.log(os.homedir());//C:\Users\34410
你的系统目录
4. console.log(os.arch());//x64
架构
5. console.log(os.cpus());
cpu的信息
6. console.log(os.networkInterfaces());
你的网络信息


有些时候不知道你是什么系统，node里有child_process可以用来执行命令行命令，这个时候可以用os来判断系统然后执行对应的命令
