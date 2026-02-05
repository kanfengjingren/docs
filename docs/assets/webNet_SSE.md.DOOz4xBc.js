import{_ as n,o as a,c as e,ah as p}from"./chunks/framework.DRDiIiLY.js";const g=JSON.parse('{"title":"SSE","description":"","frontmatter":{},"headers":[],"relativePath":"webNet/SSE.md","filePath":"webNet/SSE.md"}'),t={name:"webNet/SSE.md"};function l(i,s,c,r,o,h){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="sse" tabindex="-1">SSE <a class="header-anchor" href="#sse" aria-label="Permalink to “SSE”">​</a></h1><h2 id="sse是什么-全称server-sent-events-是个服务器向客户端传输数据的技术。通过http协议与客户端建立起长久的可持续化连接。与ws不同的是-sse中只能由服务端向客户端发送消息和数据" tabindex="-1">sse是什么？全称Server sent-Events，是个服务器向客户端传输数据的技术。通过http协议与客户端建立起长久的可持续化连接。与ws不同的是，sse中只能由服务端向客户端发送消息和数据 <a class="header-anchor" href="#sse是什么-全称server-sent-events-是个服务器向客户端传输数据的技术。通过http协议与客户端建立起长久的可持续化连接。与ws不同的是-sse中只能由服务端向客户端发送消息和数据" aria-label="Permalink to “sse是什么？全称Server sent-Events，是个服务器向客户端传输数据的技术。通过http协议与客户端建立起长久的可持续化连接。与ws不同的是，sse中只能由服务端向客户端发送消息和数据”">​</a></h2><p>SSE 是HTML5规范的一部分，该规范非常简单，主要由两部分组成：第一部分是服务端与浏览器端的通讯协议（Http协议），第二部分是浏览器端可供JavaScript使用的EventSource对象。</p><h2 id="node服务端实现" tabindex="-1">node服务端实现 <a class="header-anchor" href="#node服务端实现" aria-label="Permalink to “node服务端实现”">​</a></h2><h2 id="sse服务端的实现和http请求基本一致-只需要在服务端设置请求头-content-type-text-event-stream-即可表示我即将建立一个sse连接" tabindex="-1">sse服务端的实现和http请求基本一致，只需要在服务端设置请求头<code>&#39;content-type&#39;:&#39;text/event-stream&#39;</code>，即可表示我即将建立一个sse连接 <a class="header-anchor" href="#sse服务端的实现和http请求基本一致-只需要在服务端设置请求头-content-type-text-event-stream-即可表示我即将建立一个sse连接" aria-label="Permalink to “sse服务端的实现和http请求基本一致，只需要在服务端设置请求头&#39;content-type&#39;:&#39;text/event-stream&#39;，即可表示我即将建立一个sse连接”">​</a></h2><p>服务端发送数据时，数据通过几个消息发送，1是发送这个数据的媒体类型，默认是message。2是数据data，也可以带上时间等字段。消息之间用两个换行隔开。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>app.get(&#39;/api/sse&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  res.setHeader(&#39;Access-Control-Allow-Origin&#39;,&#39;*&#39;)</span></span>
<span class="line"><span>  //核心，设置sse请求头</span></span>
<span class="line"><span>  res.writeHead(200, {</span></span>
<span class="line"><span>    &#39;content-type&#39;: &#39;text/event-stream&#39;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  //同步读取</span></span>
<span class="line"><span>  const txt = fs.readFileSync(&#39;./a.txt&#39;, &#39;utf-8&#39;);</span></span>
<span class="line"><span>  const arr = txt.split(&#39;&#39;);</span></span>
<span class="line"><span>  let current = 0;</span></span>
<span class="line"><span>  let timer = setInterval(() =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (current &lt; arr.length) {</span></span>
<span class="line"><span>      //返回流的方式返回</span></span>
<span class="line"><span>      res.write(\`event:cs\\n\`);</span></span>
<span class="line"><span>      res.write(\`data:\${arr[current]}\\n\\n\`);</span></span>
<span class="line"><span>      current++;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>      clearInterval(timer)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }, 300)</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="客户端实现" tabindex="-1">客户端实现 <a class="header-anchor" href="#客户端实现" aria-label="Permalink to “客户端实现”">​</a></h2><p>html5中加入了EventServer这个接口；EventSource 接口是 web 内容与服务器发送事件通信的接口。</p><h2 id="一个-eventsource-实例会对-http-服务器开启一个持久化的连接-以-text-event-stream-格式发送事件-此连接会一直保持开启直到通过调用-eventsource-close-关闭。" tabindex="-1">一个 EventSource 实例会对 HTTP 服务器开启一个持久化的连接，以 text/event-stream 格式发送事件，此连接会一直保持开启直到通过调用 EventSource.close() 关闭。 <a class="header-anchor" href="#一个-eventsource-实例会对-http-服务器开启一个持久化的连接-以-text-event-stream-格式发送事件-此连接会一直保持开启直到通过调用-eventsource-close-关闭。" aria-label="Permalink to “一个 EventSource 实例会对 HTTP 服务器开启一个持久化的连接，以 text/event-stream 格式发送事件，此连接会一直保持开启直到通过调用 EventSource.close() 关闭。”">​</a></h2><p>监听事件与你在服务端定义的相同，默认是message。监听这个事件就能获取到数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>document.addEventListener(&#39;keydown&#39;,(e)=&gt;{</span></span>
<span class="line"><span>            if(e.keyCode === 13){</span></span>
<span class="line"><span>                //建立sse连接</span></span>
<span class="line"><span>                //这是通过h5的新的api来实现的</span></span>
<span class="line"><span>                const sse = new EventSource(&#39;http://localhost:3000/api/sse&#39;);</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>                //这个监听类型是可以改变的,默认是message</span></span>
<span class="line"><span>                sse.addEventListener(&#39;cs&#39;,(e)=&gt;{</span></span>
<span class="line"><span>                    document.getElementById(&#39;show&#39;).innerHTML += e.data</span></span>
<span class="line"><span>                })</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span></code></pre></div><h1 id="如何使用fetch去读取sse流" tabindex="-1">如何使用fetch去读取sse流？ <a class="header-anchor" href="#如何使用fetch去读取sse流" aria-label="Permalink to “如何使用fetch去读取sse流？”">​</a></h1><p>sse的数据是流式发送过来的，不使用eventsource，只使用流的读取也能进行。</p><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to “思路”">​</a></h2><p>使用getReader()读取到响应体中的text/event-stream流，再循环结构读取这个流，获取到发送的数据之后进行拼接就行。注意这里读取完流的数据之后，服务端得知数据推送完需要关闭连接</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const fetchSSE = () =&gt; {</span></span>
<span class="line"><span>            fetch(&#39;http://localhost:3000/api/sse&#39;).then(async res =&gt; {</span></span>
<span class="line"><span>                console.log(res.body);</span></span>
<span class="line"><span>                const reader = res.body.getReader();</span></span>
<span class="line"><span>                const decode = new TextDecoder(&#39;utf-8&#39;);</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>                while (true) {</span></span>
<span class="line"><span>                    const { done, value } = await reader.read();</span></span>
<span class="line"><span>                    if (done) {</span></span>
<span class="line"><span>                        break;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    const show = document.getElementById(&#39;show&#39;);</span></span>
<span class="line"><span>                    let str = decode.decode(value)</span></span>
<span class="line"><span>                    show.innerText += str.split(&#39;data:&#39;)[1];</span></span>
<span class="line"><span>                    </span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }</span></span></code></pre></div>`,17)])])}const v=n(t,[["render",l]]);export{g as __pageData,v as default};
