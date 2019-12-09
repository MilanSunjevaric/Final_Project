import React from 'react'

import Input from '../../Input/Input'
import Button from '../../Button/Button'
import CheckBox from '../CheckBox/CheckBox'
import { Link } from 'react-router-dom'
import '../SignForms/SignUp.css'


class SignUp extends React.Component {
  render() {
    return (
      <div>
        <h1 class="sign-up-naslov">Sign Up</h1>
        <div class="signup-form container">
          <form class="" method="get">

            <Input placeholder="First Name*" inputType="text" inputClass />
            <Input placeholder="Last Name*" inputType="text" />
            <Input placeholder="Email Address*" inputType="email" />
            <Input placeholder="Password*" inputType="password" />
            <CheckBox here="I want to receive inspiration,marketing , promotions and updates via email." />
            <Button buttonName="Sign Up" />
            <span><Link to='/SignIn'>Don't have an account? Sign up</Link></span>
          </form>

        </div>
      </div>
    )
  }
}
export default SignUp



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