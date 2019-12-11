import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {

    return (
        <nav>
            <div class="nav-wrapper container">

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    © 2019 Copyright Text

                    <li><Link to='/SignIn'>Sign In</Link></li>
                </ul>
            </div>
        </nav>

    )
}

export default Footer
