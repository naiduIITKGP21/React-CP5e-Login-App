/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'

const LogIn = props => {
  const {login} = props

  return (
    <button className="login-button" type="button" onClick={login}>
      Login
    </button>
  )
}
export default LogIn
