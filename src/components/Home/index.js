// Write your code here
import {Component} from 'react'

import './index.css'
import LogInButton from '../Login/index'

class Home extends Component {
  state = {loginStatus: false}

  onLogin = () => {
    const {loginStatus} = this.state
    this.setState(() => ({loginStatus: true}))
    console.log(loginStatus)
  }

  render() {
    const {loginStatus} = this.state
    console.log(loginStatus)
    return (
      <div className="homeContainer">
        <div className="MiniContainer">
          <h1>ok</h1>
          {loginStatus ? null : <LogInButton />}
        </div>
      </div>
    )
  }
}

export default Home
