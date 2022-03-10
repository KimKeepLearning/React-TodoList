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

## NavLink和封装NavLink

    1. NavLink可以实现路由链接的高亮，通过activeClassName
    2. 标签体内容是一个特殊的标签属性（children）
    3. 通过this.props.children可以获取标签体内容

## Switch的基本使用

    1. 通常情况下，path和component是一一对应的关系
    2. Switch可以提高路由匹配效率（单一匹配）

## 解决多级路径刷新页面时，样式丢失的问题

    1. public/index.html 中引入样式时不写./ 写/ (常用)
    2. public/index.html 中引入样式时不写./ 写%PUBLIC_URL% (常用)
    3. 使用HashRouter

## 路由的严格匹配与模糊匹配

    1. 默认使用的时模糊匹配，【输入的路径】必须包含要【匹配的路径】，且顺序要一致
    2. 开启严格匹配：<Route exact={true} path='/xxx' component={xxx} />
    3. 严格匹配不要随便开启，需要再开，否则会导致无法继续匹配二级路由

## Redirect的使用

    1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到redirect指定的路由
    2. 具体使用方法：
        '''js
            <Switch>
                <Route path='/about' component={About}>
                <Route path='/home' component={Home}>
                <Redirect to="/about">
            </Switch>
        '''

## 嵌套路由

    1. 注册子路由的时候要写上父路由的path值
    2. 路由的匹配时按照注册路由的顺序进行的
