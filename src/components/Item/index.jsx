import React,{ Component } from 'react'
import './index.css'
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouse: false,
    }
  }
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  // 勾选、取消勾选时，item的done应该改变
  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id,e.target.checked)
    }
  }
  handleDelete = (id) => {
    if(window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id);
    }

  }
  render() {
    const { name,done,id } = this.props
    const { mouse } = this.state
    return (
      <li
        style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button className='btn btn-danger' style={{ display: mouse ? 'block' : 'none' }} onClick={() => this.handleDelete(id)}>删除</button>
      </li>
    )
  }
}
