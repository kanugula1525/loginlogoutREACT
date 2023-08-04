// Write your code here
import './index.css'

import {Component} from 'react'

class LogOutButton extends Component {
  render() {
    return (
      <button className="logoutButton" onClick={this.onLogout} type="button">
        Logout
      </button>
    )
  }
}

export default LogOutButton
