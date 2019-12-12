import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <nav>
            <div class="nav-wrapper container">
                <a href="#" class="brand-logo">Bit Crud</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to='/Dashboard'>Dashboard</Link></li>
                    <li><Link to='/'>Posts</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header