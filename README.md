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
