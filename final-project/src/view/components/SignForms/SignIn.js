import React from 'react'
import { Link } from 'react-router-dom'
const SignIn = (props) => {
  return (
    <div>
      <form >
        <div class="signup-form" className="container">
          <form class="" method="post">
            <h1>Sign Up</h1>
            <input type="text" placeholder="Full Name" class="txtb" />
            <input type="email" placeholder="Email" class="txtb" />
            <input type="password" placeholder="Password" class="txtb" />
            <input type="submit" value="Create Account" class="signup-btn" />
            <a href="#">Already Have one ?</a>
          </form>
        </div>
      </form>
    </div>
  )
}
export default SignIn