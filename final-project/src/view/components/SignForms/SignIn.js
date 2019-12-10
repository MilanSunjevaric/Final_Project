import React from 'react'

import { Link } from 'react-router-dom'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import Checkbox from '../CheckBox/CheckBox'
import "../SignForms/SignIn.css"



class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      check: false

    }

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
        <h1 className="Sign-in-title">Sign in</h1>
        <div class="signin-form container">
          <form className="" method="post">
            <Input inputType="email" inputId="Email4" placeholder="Email" onChange={this.getEmail} />
            <Input inputName="Password" inputType="password" inputID="password" placeholder="Password*" onChange={this.getPassword} />
            <Checkbox here="Remember me" onChange={this.getCheck}></Checkbox>
            <Button buttonName="Sign In" className="btn" />
            <p><span className="spanone"><Link to='/SignUp'>Forgot password</Link></span> <span className="spantwo"><Link to='/SignUp'>Don't have an account? Sign up</Link></span></p>
          </form>

        </div>
      </div>



    )
  }
}
export default SignIn


{/* <div class="signup-form">
<form class="" action="index.html" method="post">
  <h1>Sign Up</h1>
  <input type="text" placeholder="Full Name" class="txtb">
  <input type="email" placeholder="Email" class="txtb">
  <input type="password" placeholder="Password" class="txtb">
  <input type="submit" value="Create Account" class="signup-btn">
  <a href="#">Already Have one ?</a>
</form>
</div> */}