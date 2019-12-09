import React from 'react'

import Input from '../Users/Input'
import Button from '../Users/Button'

class SignUp extends React.Component {
  render() {
    return (
      <>
        <h1>Sing Up</h1>
        <Input placeholder="Name" />
        <Input placeholder="Last Name" />
        <Button buttonName="Sing Up" />
      </>

    )
  }
}
export default SignUp