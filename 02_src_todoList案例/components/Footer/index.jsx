import React,{ Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  }
  handleClearAllDone = () => {
    this.props.clearAllDone();
  }
  render() {
    const { todos } = this.props;
    // 已完成的个数
    const doneCount = todos.reduce((prev,todo) => todo.done ? prev + 1 : prev,0)
    const total = todos.length;
    return (
      <div className='todo-footer'>
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className='btn btn-danger' onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
