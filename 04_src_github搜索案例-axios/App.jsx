import React,{ Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFirst: true,
      isLoading: false,
      err: '',
    }
  }
  updateAPPState = (stateObj) => {
    this.setState(stateObj)
  }


  render() {
    return (
      <div className="container">
        <Search updateAPPState={this.updateAPPState} />
        <List {...this.state} />
      </div>
    )
  }
}
