import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Bit Crud</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">

                    <li><Link to='/'>Home</Link></li>
                    <li>About</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header