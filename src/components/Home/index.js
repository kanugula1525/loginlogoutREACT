// Write your code here
import {Component} from 'react'

import './index.css'
import LogInButton from '../Login/index'
import LogOutButton from '../Logout'
import {LogInMessage, WelcomeMessage} from '../Message/index'

class Home extends Component {
  state = {loginStatus: false}

  onLogin = () => {
    this.setState(() => ({loginStatus: true}))
  }

  onLogOut = () => {
    this.setState(() => ({loginStatus: false}))
  }

  render() {
    const {loginStatus} = this.state
    return (
      <div className="homeContainer">
        <div className="MiniContainer">
          {loginStatus ? <WelcomeMessage /> : <LogInMessage />}
          {loginStatus ? (
            <LogOutButton onLogOut={this.onLogOut} />
          ) : (
            <LogInButton onLogin={this.onLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
