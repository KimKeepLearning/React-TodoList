import React,{ Component } from 'react'
import { Route,Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About' // 路由组件
import Header from './components/Header' // 一般组件
import MyNavLink from './components/MyNavLink'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <Header />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 原生的<a> */}
                {/* <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a> */}

                {/* React路由链接---------第一步：监测路由的变化*/}
                {/* <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
                <NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink> */}

                <MyNavLink to="/about">About</MyNavLink>
                <MyNavLink to="/home">Home</MyNavLink>

              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由----第二步： 设置路由键值对（key,value），使路由变化时显示对应的组件*/}
                  <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/home" component={Home} />
                  </Switch>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
