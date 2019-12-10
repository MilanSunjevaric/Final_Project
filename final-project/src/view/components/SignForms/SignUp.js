import React from 'react'

import Input from '../../Input/Input'
import Button from '../../Button/Button'
import CheckBox from '../CheckBox/CheckBox'
import { Link } from 'react-router-dom'
import '../SignForms/SignUp.css'
import { http } from '../../../Services/HttpService'


class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      check: false,
      error: ""
    }

  }
  reset = () => {
    this.setState({ error: "" })

  }

  getFirstName = (n) => {
    this.setState({ firstName: n })
    this.reset()
  }
  getLastName = (n) => {
    this.setState({ lastName: n })
    this.reset()
  }
  getEmail = (n) => {
    this.setState({ email: n })
    this.reset()
  }
  getPassword = (n) => {
    this.setState({ password: n })
    this.reset()
  }
  getCheck = (n) => {
    this.setState({ check: n })
  }
  postSignUpData = (e) => {

    e.preventDefault()
    const data = {
      name: `${this.state.firstName} ${this.state.lastName}`,

      email: this.state.email,
      password: this.state.password
    }

    http.post('/auth/register', data)
      .then((res) => {

        this.props.history.push('/SignIn')

      })
      .catch((rej) => {
        this.setState({ error: rej.response.data.message });

      })
  }



  render() {
    return (
      <div>
        <h5>{this.state.error}</h5>
        <h1 class="sign-up-naslov">Sign Up</h1>
        <div class="signup-form container">
          <form>
            <Input placeholder="First Name*" inputType="text" onChange={this.getFirstName} />
            <Input placeholder="Last Name*" inputType="text" onChange={this.getLastName} />
            <Input placeholder="Email Address*" inputType="email" onChange={this.getEmail} />
            <Input placeholder="Password*" inputType="password" onChange={this.getPassword} />
            <CheckBox onChange={this.getCheck} here="I want to receive inspiration,marketing , promotions and updates via email." />
            <Button buttonName="Sign Up" onClick={this.postSignUpData} />
            <span><Link to='/SignIn'>Don't have an account? Sign up</Link></span>
          </form>
        </div>
      </div>
    )
  }
}
export default SignUp



