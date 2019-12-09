import React from 'react'

import Input from '../Users/Input'
import Button from '../Users/Button'
import CheckBox from '../CheckBox/CheckBox'
import { Link } from 'react-router-dom'


class SignUp extends React.Component {
  render() {
    return (
      <>
        <h1>Sing Up</h1>
        <Input placeholder="First Name*" inputType="text" />
        <Input placeholder="Last Name*" inputType="text" />
        <Input placeholder="Email Address*" inputType="email" />
        <Input placeholder="Password*" inputType="password" />
        <CheckBox here="I want to receive inspiration,marketing , promotions and updates via email." />
        <Button buttonName="Sing Up" />
        <Link to="/SignIn">Already have an account?Sign in</Link>

      </>

    )
  }
}
export default SignUp



