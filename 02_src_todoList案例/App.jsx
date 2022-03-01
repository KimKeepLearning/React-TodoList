import React,{ Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'
// 状态在哪里，操作APP的方法就在哪里
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

  updateTodo = (id,done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if(id === todoObj.id) return { ...todoObj,done: done };
      else return todoObj;
    })

    this.setState({
      todos: newTodos
    })
  }
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj,done,}
    })

    this.setState({
      todos: newTodos,
    })
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id != id
    })

    this.setState({
      todos: newTodos
    })
  }

  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => todoObj.done === false);

    this.setState({
      todos: newTodos,
    })
  }

  render() {
    const { todos } = this.state;

    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}
