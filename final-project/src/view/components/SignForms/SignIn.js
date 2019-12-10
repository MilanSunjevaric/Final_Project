import React from 'react'

import { Link } from 'react-router-dom'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import Checkbox from '../CheckBox/CheckBox'
import "../SignForms/SignIn.css"
import { http } from '../../../Services/HttpService'




class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      error: '',
      check: false,


    }

  }
  reset = () => {
    this.setState({ error: '' })
  }

  getEmail = (n) => {
    this.reset()
    this.setState({ email: n })
  }

  getPassword = (n) => {
    this.reset()
    this.setState({ password: n })
  }

  getCheck = (n) => {
    this.setState({ check: n })
  }

  postSignInData = (e) => {
    e.preventDefault()

    const data = {
      email: this.state.email,
      password: this.state.password
    }



    http.post('/auth/login', data)
      .then((res) => {

        this.props.history.push('/UserList')

        console.log(res);

      })
      .catch((rej) => {
        this.setState({ error: rej.response.data.message })
        console.log(rej);

      })

  }


  render() {

    return (
      <div>
        <h1 className="Sign-in-title">Sign in</h1>
        <div class="signin-form container">
          <form className="" method="post">
            <div><p>{this.state.error} <br /></p></div>
            <Input inputType="email" inputId="Email4" placeholder="Email" onChange={this.getEmail} />
            <Input inputName="Password" inputType="password" inputID="password" placeholder="Password*" onChange={this.getPassword} />
            <Checkbox here="Remember me" onChange={this.getCheck}></Checkbox>
            <Button buttonName="Sign In" className="btn" onClick={this.postSignInData} buttonName='SIGN IN' />
            <p><span className="spanone"><Link to='/SignUp'>Forgot password</Link></span> <span className="spantwo"><Link to='/SignUp'>Don't have an account? Sign up</Link></span></p>
          </form>

        </div>
      </div>



    )
  }
}
export default SignIn


