import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Users/Input'
import Button from '../Users/Button'

class SignIn extends React.Component {
  render() {
    return (
      <>
        <Input label="Email" inputType="email" inputId="Email4" />
        <Input inputName="Password" inputType="password" inputID="password" placeholder="Password*" />
        <Button buttonName="Sign In" />

      </>



    )
  }
}

export default SignIn