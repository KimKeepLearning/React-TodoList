import React,{ Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: '01',name: '吃饭',done: true },
        { id: '02',name: '睡觉',done: true },
        { id: '03',name: '学习',done: false },
      ]
    }
  }
  addTodo = (todoObj) => {
    const { todos } = this.state;

    this.setState({
      todos: [todoObj,...todos]
    });
  }
  render() {
    const { todos } = this.state;

    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
