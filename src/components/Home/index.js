// Write your code here
import {Component} from 'react'
import LogIn from '../Login'
import LogOut from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  changeState = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="la-bg">
        <Message isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogOut logout={this.changeState} />
        ) : (
          <LogIn login={this.changeState} />
        )}
      </div>
    )
  }
}

export default Home
