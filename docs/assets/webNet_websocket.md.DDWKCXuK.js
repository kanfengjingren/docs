import{_ as n,o as a,c as p,ae as e}from"./chunks/framework.BIONGpTb.js";const t="/docs/assets/%E8%AF%B7%E6%B1%82%E5%A4%B4%E6%A0%87%E8%AF%86.CtyStcd6.png",u=JSON.parse('{"title":"websocket","description":"","frontmatter":{},"headers":[],"relativePath":"webNet/websocket.md","filePath":"webNet/websocket.md"}'),l={name:"webNet/websocket.md"};function c(i,s,o,d,r,b){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="websocket" tabindex="-1">websocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;websocket&quot;">​</a></h1><h3 id="这个是什么" tabindex="-1">这个是什么？ <a class="header-anchor" href="#这个是什么" aria-label="Permalink to &quot;这个是什么？&quot;">​</a></h3><p>传统的http协议只能客户端单方面发送请求，也有通过轮询的方式来实现两边通信，但是这种操作的请求和响应太过于频繁了 websocket可以建立起一个不会自动关闭的双向通道 怎么建立起持久的链接的呢？ WebSocket通过TCP连接来保持持久连接。TCP是一个面向连接的协议，它在客户端和服务器之间建立一个稳定的连接，直到主动断开。因此，WebSocket利用TCP的特性保持连接持续开放。</p><h2 id="使用nodejs搭建一个简单的websocket" tabindex="-1">使用nodejs搭建一个简单的websocket <a class="header-anchor" href="#使用nodejs搭建一个简单的websocket" aria-label="Permalink to &quot;使用nodejs搭建一个简单的websocket&quot;">​</a></h2><p>服务端：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 引入WebSocket服务器库</span></span>
<span class="line"><span>const WebSocket = require(&#39;ws&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个WebSocket服务器，监听8080端口</span></span>
<span class="line"><span>const wss = new WebSocket.Server({ port: 8080 });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 当有客户端连接时</span></span>
<span class="line"><span>wss.on(&#39;connection&#39;, function connection(ws) {</span></span>
<span class="line"><span>  console.log(&#39;新的客户端连接&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 当收到客户端发送的消息时</span></span>
<span class="line"><span>  ws.on(&#39;message&#39;, function incoming(message) {</span></span>
<span class="line"><span>    console.log(&#39;收到消息: %s&#39;, message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 将收到的消息回显给客户端</span></span>
<span class="line"><span>    ws.send(\`服务器收到：\${message}\`);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 当连接关闭时</span></span>
<span class="line"><span>  ws.on(&#39;close&#39;, function close() {</span></span>
<span class="line"><span>    console.log(&#39;客户端断开连接&#39;);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 发送一条欢迎消息给客户端</span></span>
<span class="line"><span>  ws.send(&#39;欢迎连接WebSocket服务器！&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&#39;WebSocket服务器正在运行在 ws://localhost:8080&#39;);</span></span></code></pre></div><p>客户端创建websocket对象然后进行链接：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;text&quot;&gt;</span></span>
<span class="line"><span>        &lt;button&gt;点击发送信息&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;container&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    const btn = document.querySelector(&#39;button&#39;);</span></span>
<span class="line"><span>    const input = document.querySelector(&#39;input&#39;);</span></span>
<span class="line"><span>    const container = document.querySelector(&#39;.container&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const socket = new WebSocket(&#39;ws://localhost:8080&#39;);</span></span>
<span class="line"><span>    socket.addEventListener(&#39;open&#39;, () =&gt; {</span></span>
<span class="line"><span>        socket.send(&#39;已连接到服务器&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    socket.addEventListener(&#39;message&#39;,(e)=&gt;{</span></span>
<span class="line"><span>        addMessage(&#39;服务端：&#39;+e.data);</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    btn.onclick = function () {</span></span>
<span class="line"><span>        let str = input.value;</span></span>
<span class="line"><span>        socket.send(str);</span></span>
<span class="line"><span>        addMessage(&#39;我：&#39;+str)</span></span>
<span class="line"><span>        input.value = &#39;&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    function addMessage(str){</span></span>
<span class="line"><span>        const client = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span>        client.innerHTML = str;</span></span>
<span class="line"><span>        container.appendChild(client);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>**原理：**应该是在发送请求的时候在请求头上带上了升级协议的标识 <img src="`+t+`" alt=""></p><p>现在这个还只是客户端对服务器发出请求，那么我能不能多加入几个客户端，这样每个客户端就能聊天了，明天试试</p><h2 id="js中的websocket对象" tabindex="-1">js中的websocket对象 <a class="header-anchor" href="#js中的websocket对象" aria-label="Permalink to &quot;js中的websocket对象&quot;">​</a></h2><p>直接使用websocket就能创建一个实例对象 <code>new WebSocket(url, protocols)</code> protocols可以选择传不传入，这个可以指定websocket不同的子协议</p><h3 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h3><h4 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-label="Permalink to &quot;close&quot;">​</a></h4><p>使用后关闭通道</p><h4 id="send" tabindex="-1">send <a class="header-anchor" href="#send" aria-label="Permalink to &quot;send&quot;">​</a></h4><p>可以发送消息</p><h2 id="websocket服务端接收到的消息格式-存疑" tabindex="-1">websocket服务端接收到的消息格式 存疑 <a class="header-anchor" href="#websocket服务端接收到的消息格式-存疑" aria-label="Permalink to &quot;websocket服务端接收到的消息格式   存疑&quot;">​</a></h2><p>服务端只能接收到buffer和string的。 我在客户端想要发送一个object，使用JSON.stringfy转化之后变成了JSON字符串，发送的时候会变成二进制buffer然后服务端收到的是buffer，所以不能直接JSON.parse 需要先转化成字符串然后再解析</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    let dataStr = data.toString(&#39;utf-8&#39;);</span></span>
<span class="line"><span>    dataStr = JSON.parse(dataStr)</span></span>
<span class="line"><span>    console.log(\`收到\${dataStr.Id}消息: %s\`, dataStr.message);</span></span></code></pre></div><h2 id="websocket实现广播" tabindex="-1">websocket实现广播 <a class="header-anchor" href="#websocket实现广播" aria-label="Permalink to &quot;websocket实现广播&quot;">​</a></h2><p>服务端创建websocket服务器监听窗口时，是创建了一个服务端的wss</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const wss = new WebSocket.Server({ port: 8080 });</span></span></code></pre></div><p>接着在建立链接的时候，回调函数里面需要传入ws即客户端对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wss.on(&#39;connection&#39;, function connection(ws) {})</span></span></code></pre></div><p>**如果开了很多个客户端，就可以在这里进行操作：**因为新建立一个链接就会有新的ws传进来，所以要实现多人通话，可以使用Map集合把ws保存起来 并且设置clientId作为每个客户端的唯一识别符</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    //把这个客户端的id记录下来</span></span>
<span class="line"><span>    const clientId = \`客户端_\${clientCount++}\`;</span></span>
<span class="line"><span>    clientMap.set(clientId, ws);</span></span></code></pre></div><h3 id="接收并广播消息" tabindex="-1">接收并广播消息 <a class="header-anchor" href="#接收并广播消息" aria-label="Permalink to &quot;接收并广播消息&quot;">​</a></h3><p>实例里面有个clients去统计有几个客户端连接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    ws.on(&#39;message&#39;, function incoming(data) {</span></span>
<span class="line"><span>        let dataStr = data.toString(&#39;utf-8&#39;);</span></span>
<span class="line"><span>        dataStr = JSON.parse(dataStr)</span></span>
<span class="line"><span>        console.log(\`收到\${dataStr.Id}消息: %s\`, dataStr.message);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //向其他客户端广播这个消息</span></span>
<span class="line"><span>        //就向这个客户端发送信息</span></span>
<span class="line"><span>        //其实每个客户端都受到信息，但是如果id是自己的，客户端这边处理一下，不要打印出来</span></span>
<span class="line"><span>        //我本来想的是遍历集合，向每个非当前id的客户端发送一次信息，但是这个好像不能实现</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //我发现了，这里只send给了当前发消息的哪个人</span></span>
<span class="line"><span>        clientMap.forEach((ws,clientId) =&gt; {</span></span>
<span class="line"><span>            if (clientId !== dataStr.Id) {</span></span>
<span class="line"><span>                ws.send(JSON.stringify({</span></span>
<span class="line"><span>                    type: &#39;message&#39;,</span></span>
<span class="line"><span>                    message: dataStr.message,</span></span>
<span class="line"><span>                    clientId: dataStr.Id</span></span>
<span class="line"><span>                }))</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //哦，当前的这个ws就是客户端，但是是当前的客户端</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    });</span></span></code></pre></div><p>刚开始我以为，send是向所有客户端发送（当时不知道是有多个客户端的，所以想着直接send，结果发现，只发送给了发送消息的客户端，这才知道客户端其实也是被分开了的）。所以现在，遍历Map集合，使用clientId去分开客户端，然后再选择性广播👍</p>`,31)])])}const g=n(l,[["render",c]]);export{u as __pageData,g as default};
