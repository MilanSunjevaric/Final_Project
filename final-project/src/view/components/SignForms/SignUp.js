import React from 'react'

import Input from '../../Input/Input'
import Button from '../../Button/Button'
import CheckBox from '../CheckBox/CheckBox'
import { Link } from 'react-router-dom'
import '../SignForms/SignUp.css'


class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      check: false
    }

  }
  getFirstName = (n) => {
    this.setState({ firstName: n })
  }
  getLastName = (n) => {
    this.setState({ lastName: n })
  }
  getEmail = (n) => {
    this.setState({ email: n })
  }
  getPassword = (n) => {
    this.setState({ password: n })
  }
  getCheck = (n) => {
    this.setState({ check: n })
  }


  render() {
    return (
      <div>
        <h1 class="sign-up-naslov">Sign Up</h1>
        <div class="signup-form container">
          <form>
            <Input placeholder="First Name*" inputType="text" onChange={this.getFirstName} />
            <Input placeholder="Last Name*" inputType="text" onChange={this.getLastName} />
            <Input placeholder="Email Address*" inputType="email" onChange={this.getEmail} />
            <Input placeholder="Password*" inputType="password" onChange={this.getPassword} />
            <CheckBox onChange={this.getCheck} here="I want to receive inspiration,marketing , promotions and updates via email." />
            <Button buttonName="Sign Up" />
            <span><Link to='/SignIn'>Don't have an account? Sign up</Link></span>
          </form>
        </div>
      </div>
    )
  }
}
export default SignUp



