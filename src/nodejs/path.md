# path
这是node自带的，所以直接引用即可
## windows和posix的路径表达
PosixPath 是在 POSIX 兼容系统（如 Linux、macOS）上使用的路径类，它处理路径分隔符为斜杠（/）。 在 Windows 上，对应的类是 pathlib.WindowsPath，它使用反斜杠（\）作为分隔符


1. **dir、base**   这两个是互补的

```
console.log(path.dirname('./a/b/c/index.html'));  
console.log(path.basename('./a/b/c/index.html'));
```

输出：
- ./a/b/c/
- index.html

2. **extname**：返回扩展名

```js
console.log(path.extname('./a/b/c/index.html'));
```
输出：
- .html

3. **join**拼接，而且支持操作符如  ../
```js
console.log(path.join('/a', '/b', '/c', '../'));
```
输出：
- \a\b\    因为一开始是/a/b/c,后面加上了../返回上级目录，所以是/a/b 
  

4. **resolve** 返回绝对路径

```js
console.log(path.resolve('/aaa', '/bbb', '/ccc'));//返回最右边的绝对路径
console.log(path.resolve('./index.js'));
console.log(path.resolve(__dirname, './index.js'));//加上绝对路径之后还是这个
console.log(path.resolve(__dirname));
```
输出：
- D:\ccc
- D:\code\nodejs\path\index.js
- D:\code\nodejs\path\index.js
- D:\code\nodejs\path

5. **parse format** parse分解，format重组
```
console.log(path.parse('/aaa/bbb/cc/dd/index.html'));
```
- {
  root: '/',
  dir: '/aaa/bbb/cc/dd',
  base: 'index.html',
  ext: '.html',
  name: 'index'
}

```js
console.log(path.format(
    {
        root: '/',
        dir: '/aaa/bbb/cc/dd',
        base: 'index.html',
        ext: '.html',
        name: 'index'
    }
));
```
又给拼接回去了

- /aaa/bbb/cc/dd\index.html
诶，是不是有点怪

```
console.log(path.posix.format({
    root: '/', dir: '/home/user/dir', base: 'file.txt', ext: '.txt', name: 'file',
}))
```

- 这个的结果是：/home/user/dir/file.txt

这是在windows环境下的原因，window在拼接的时候自动用了反斜，你使用posix就一样了


