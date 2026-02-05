# SSE
sse是什么？全称Server sent-Events，是个服务器向客户端传输数据的技术。通过http协议与客户端建立起长久的可持续化连接。与ws不同的是，sse中只能由服务端向客户端发送消息和数据
---
SSE 是HTML5规范的一部分，该规范非常简单，主要由两部分组成：第一部分是服务端与浏览器端的通讯协议（Http协议），第二部分是浏览器端可供JavaScript使用的EventSource对象。
## node服务端实现
sse服务端的实现和http请求基本一致，只需要在服务端设置请求头`'content-type':'text/event-stream'`，即可表示我即将建立一个sse连接
---
服务端发送数据时，数据通过几个消息发送，1是发送这个数据的媒体类型，默认是message。2是数据data，也可以带上时间等字段。消息之间用两个换行隔开。
```
app.get('/api/sse', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin','*')
  //核心，设置sse请求头
  res.writeHead(200, {
    'content-type': 'text/event-stream'
  })
  //同步读取
  const txt = fs.readFileSync('./a.txt', 'utf-8');
  const arr = txt.split('');
  let current = 0;
  let timer = setInterval(() => {

    if (current < arr.length) {
      //返回流的方式返回
      res.write(`event:cs\n`);
      res.write(`data:${arr[current]}\n\n`);
      current++;
    }else{
      clearInterval(timer)
    }

    

  }, 300)
})
```

## 客户端实现
html5中加入了EventServer这个接口；EventSource 接口是 web 内容与服务器发送事件通信的接口。

一个 EventSource 实例会对 HTTP 服务器开启一个持久化的连接，以 text/event-stream 格式发送事件，此连接会一直保持开启直到通过调用 EventSource.close() 关闭。
---
监听事件与你在服务端定义的相同，默认是message。监听这个事件就能获取到数据

```
document.addEventListener('keydown',(e)=>{
            if(e.keyCode === 13){
                //建立sse连接
                //这是通过h5的新的api来实现的
                const sse = new EventSource('http://localhost:3000/api/sse');
                
                
                //这个监听类型是可以改变的,默认是message
                sse.addEventListener('cs',(e)=>{
                    document.getElementById('show').innerHTML += e.data
                })
            }
        })
```

# 如何使用fetch去读取sse流？
sse的数据是流式发送过来的，不使用eventsource，只使用流的读取也能进行。
## 思路
使用getReader()读取到响应体中的text/event-stream流，再循环结构读取这个流，获取到发送的数据之后进行拼接就行。注意这里读取完流的数据之后，服务端得知数据推送完需要关闭连接
```
const fetchSSE = () => {
            fetch('http://localhost:3000/api/sse').then(async res => {
                console.log(res.body);
                const reader = res.body.getReader();
                const decode = new TextDecoder('utf-8');
                
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) {
                        break;
                    }
                    const show = document.getElementById('show');
                    let str = decode.decode(value)
                    show.innerText += str.split('data:')[1];
                    
                }
            
                
                
            })
        }
```
