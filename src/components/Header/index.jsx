import React,{ Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'
export default class Header extends Component {

  handleKeyUp = (e) => {
    const { keyCode,target } = e;
    if(keyCode !== 13) return;
    if(target.value.trim() === '') {
      alert('输入不能为空哦');
      return;
    }
    //准备todo对象
    const todoObj = { id: nanoid(),name: target.value,done: false };

    this.props.addTodo(todoObj);
    target.value = "";
  }

  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder='请输入任务名称，回车键确认' />
      </div>
    )
  }
}
