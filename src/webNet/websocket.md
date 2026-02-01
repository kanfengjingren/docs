# websocket
### 这个是什么？
传统的http协议只能客户端单方面发送请求，也有通过轮询的方式来实现两边通信，但是这种操作的请求和响应太过于频繁了
websocket可以建立起一个不会自动关闭的双向通道
怎么建立起持久的链接的呢？
WebSocket通过TCP连接来保持持久连接。TCP是一个面向连接的协议，它在客户端和服务器之间建立一个稳定的连接，直到主动断开。因此，WebSocket利用TCP的特性保持连接持续开放。

## 使用nodejs搭建一个简单的websocket
服务端：
```
// 引入WebSocket服务器库
const WebSocket = require('ws');

// 创建一个WebSocket服务器，监听8080端口
const wss = new WebSocket.Server({ port: 8080 });

// 当有客户端连接时
wss.on('connection', function connection(ws) {
  console.log('新的客户端连接');

  // 当收到客户端发送的消息时
  ws.on('message', function incoming(message) {
    console.log('收到消息: %s', message);

    // 将收到的消息回显给客户端
    ws.send(`服务器收到：${message}`);
    
  });

  // 当连接关闭时
  ws.on('close', function close() {
    console.log('客户端断开连接');
  });

  // 发送一条欢迎消息给客户端
  ws.send('欢迎连接WebSocket服务器！');
});

console.log('WebSocket服务器正在运行在 ws://localhost:8080');
```
客户端创建websocket对象然后进行链接：
```
<body>

    <div>
        <input type="text">
        <button>点击发送信息</button>
    </div>
    <div class="container"></div>
</body>
<script>
    const btn = document.querySelector('button');
    const input = document.querySelector('input');
    const container = document.querySelector('.container')

    const socket = new WebSocket('ws://localhost:8080');
    socket.addEventListener('open', () => {
        socket.send('已连接到服务器')
    })
    socket.addEventListener('message',(e)=>{
        addMessage('服务端：'+e.data);
    })

    btn.onclick = function () {
        let str = input.value;
        socket.send(str);
        addMessage('我：'+str)
        input.value = '';
    }

    function addMessage(str){
        const client = document.createElement('div');
        client.innerHTML = str;
        container.appendChild(client);
    }

</script>

</html>
```
**原理：**应该是在发送请求的时候在请求头上带上了升级协议的标识


现在这个还只是客户端对服务器发出请求，那么我能不能多加入几个客户端，这样每个客户端就能聊天了，明天试试

## js中的websocket对象
直接使用websocket就能创建一个实例对象
`new WebSocket(url, protocols)` protocols可以选择传不传入，这个可以指定websocket不同的子协议

### 实例方法
#### close
使用后关闭通道
#### send
可以发送消息

## websocket服务端接收到的消息格式   存疑
服务端只能接收到buffer和string的。
我在客户端想要发送一个object，使用JSON.stringfy转化之后变成了JSON字符串，发送的时候会变成二进制buffer然后服务端收到的是buffer，所以不能直接JSON.parse
需要先转化成字符串然后再解析
```
    let dataStr = data.toString('utf-8');
    dataStr = JSON.parse(dataStr)
    console.log(`收到${dataStr.Id}消息: %s`, dataStr.message);
```

## websocket实现广播
服务端创建websocket服务器监听窗口时，是创建了一个服务端的wss
```
const wss = new WebSocket.Server({ port: 8080 });
```
接着在建立链接的时候，回调函数里面需要传入ws即客户端对象
```
wss.on('connection', function connection(ws) {})
```
**如果开了很多个客户端，就可以在这里进行操作：**因为新建立一个链接就会有新的ws传进来，所以要实现多人通话，可以使用Map集合把ws保存起来
并且设置clientId作为每个客户端的唯一识别符
```
    //把这个客户端的id记录下来
    const clientId = `客户端_${clientCount++}`;
    clientMap.set(clientId, ws);
```

### 接收并广播消息
实例里面有个clients去统计有几个客户端连接
```
    ws.on('message', function incoming(data) {
        let dataStr = data.toString('utf-8');
        dataStr = JSON.parse(dataStr)
        console.log(`收到${dataStr.Id}消息: %s`, dataStr.message);

        //向其他客户端广播这个消息
        //就向这个客户端发送信息
        //其实每个客户端都受到信息，但是如果id是自己的，客户端这边处理一下，不要打印出来
        //我本来想的是遍历集合，向每个非当前id的客户端发送一次信息，但是这个好像不能实现

        //我发现了，这里只send给了当前发消息的哪个人
        clientMap.forEach((ws,clientId) => {
            if (clientId !== dataStr.Id) {
                ws.send(JSON.stringify({
                    type: 'message',
                    message: dataStr.message,
                    clientId: dataStr.Id
                }))
            }
        })

        //哦，当前的这个ws就是客户端，但是是当前的客户端


    });
```
刚开始我以为，send是向所有客户端发送（当时不知道是有多个客户端的，所以想着直接send，结果发现，只发送给了发送消息的客户端，这才知道客户端其实也是被分开了的）。所以现在，遍历Map集合，使用clientId去分开客户端，然后再选择性广播👍