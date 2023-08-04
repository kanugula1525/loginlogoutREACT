// Write your code here
import './index.css'

const LogOutButton = props => {
  const {onLogOut} = props

  const onLogOutUser = () => {
    onLogOut()
  }

  return (
    <button onClick={onLogOutUser} className="logoutButton" type="button">
      Logout
    </button>
  )
}

export default LogOutButton
