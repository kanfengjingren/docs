# watch和computed


computed
```ts
const route = useRoute();
const sessionId = computed(() => Number(route.params.id));
```

watch
```ts
const route = useRoute();
let sessionId: number

watch(route, () => {
    sessionId = Number(route.params.id)
    console.log(route.params.id);

}, {
    immediate: true
})
```

这两个看上去的效果是一样的，都实现了切换路由的时候session的更新，但是其实是不一样的,或者说是监听的属性不一样，下面的要是换成ref就是一样的了

## watch和watcheffect的区别

1. watch控制更细致，可以指定监听一个对象，而watcheffect是监听你里面所有的对象
2. watcheffect会自动调用，而watch只在监听的值发生改变的时候调用 但是watch也可以通过immediate: true 启用默认执行一次
3. watcheffect是深度监听的，就是ref对象的子属性改变了也会呗监听到，而watch要通过deep来开启
4. watch可以通过oldvalue来获取旧的值而watcheffect不行