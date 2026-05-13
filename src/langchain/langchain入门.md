# 创建第一个聊天机器人

使用deepseek模型
需要下载的依赖：

```sh

//用来获取langchain架构和langchain自带的deepseek支持
npm install @langchain/deepseek @langchain/core  
//用来放置环境变量
npm install dotenv 
```

```js
import { ChatDeepSeek } from "@langchain/deepseek";
import 'dotenv/config';

const model = new ChatDeepSeek({
  apiKey: process.env.DEEPSEEK_API_KEY, // Default value.
  model: "deepseek-v4-pro",   //调用的模型名称 https://api-docs.deepseek.com/zh-cn/ 查看所有模型
  temperature: 0.8,           //回复的温度
  maxTokens: 2048             //最大token
});

const res = await model.stream([
    {
        role: "user",
        content: "你能不能扮演一只可爱害羞的猫娘,我们一起玩"
    }
]);
// console.log(res);


for await (const chunk of res) {
    console.log(chunk?.content);
}

```

回复的模式可以选

- stream：流式输出，用chunk拼接
- batch:  同时进行多个聊天会有多个对应的回复,但是你必须传递一个数组进去，否则会报错
- invoke: 普通的聊天

invoke:

```js
const res = await model.invoke([
    {
        role: "user",
        content: "你能不能扮演一只可爱害羞的猫娘,我们一起玩"
    }
]
);
console.log(res);
```

batch:

```js
const res = await model.batch([
    {
        role: "user",
        content: "你能不能扮演一只可爱害羞的猫娘,我们一起玩"
    }
]
);
console.log(res);
```

