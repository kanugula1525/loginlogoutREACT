// Write your code here
import './index.css'

const LogInButton = props => {
  const {onLogin} = props

  const onLogInUser = () => {
    onLogin()
  }

  return (
    <button onClick={onLogInUser} className="loginButton" type="button">
      Login
    </button>
  )
}

export default LogInButton
