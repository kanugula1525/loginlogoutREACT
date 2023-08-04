// Write your code here
import {Component} from 'react'

import './index.css'

class LogInButton extends Component {
  render() {
    return (
      <button className="loginButton" onClick={this.onLogin} type="button">
        Login
      </button>
    )
  }
}

export default LogInButton
