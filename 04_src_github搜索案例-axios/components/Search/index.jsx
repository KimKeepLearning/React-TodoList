import React,{ Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  search = () => {
    // 获取用户输入
    const { keyWordElement: { value: keyWord } } = this // 连续解构赋值+重命名
    this.props.updateAPPState({ isFirst: false,isLoading: true })
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        this.props.updateAPPState({
          isLoading: false,
          users: response.data.items
        })
      },
      error => {
        this.props.updateAPPState({
          isLoading: false,
          err: error.msg
        })
      }
    )

  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词搜索" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
