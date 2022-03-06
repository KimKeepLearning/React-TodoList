## todo list相关知识点

1. 拆分组件、实现静态组件，注意className和style写法；
2. 动态初始化列表，确定数据放在哪个组件的state中
    a. 某个组件使用：放在该组件的state中
    b. 某些组件使用，放在公共的父组件中（状态提升）
3. 关于父子间通信
    a. 父组件给子组件传递数据：props
    b. 子组件给父组件传递数据：给props传回调函数
4. 注意defaultChecked和checked的区别
5. 状态在哪里，操作状态的方法就在哪里

## github搜索案例

1. 涉及状态要考虑全面，带有网络请求的组件，都要考虑请求失败时怎么处理和显示
2. 消息订阅与发布机制
    a. 先订阅，再发布（接收数据的组件订阅，数据所在组件发布）
    b. 适用于任意组件通信
    c. 要在componentWillUnmount中取消订阅

## 路由的基本使用

1. 导航区的标签改为<Link to="/"></Link>
2. 展示区与Route标签进行路径的匹配
    <Route path='/xxx' component={Demo}/>
3. App的最外侧包裹了一个<BrowserRouter>或者<HashRouter>

## 路由组件与一般组件

1. 写法不同: <Demo/>和<Route path="/demo" component={Demo}>
2. 存放位置不同：pages和components
3. 接收到的props不同：
    一般组件：传什么接受什么
    路由组件：props==>
    '''js
        history:
            go: ƒ go(n)
            goBack: ƒ goBack()
            goForward: ƒ goForward()
            push: ƒ push(path, state)
            replace: ƒ replace(path, state)
        location:
            pathname: "/about"
            search: ""
            state: undefined
        match:
            params: {}
            path: "/about"
            url: "/about"
    '''
