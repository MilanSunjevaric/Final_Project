import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'


const Header = () => {

    const token = localStorage.getItem('jwtToken')

    let navList = ""

    if (token) {
        navList = (
            <>
                <Link to={'/dashboard'}><Button buttonName={"Dashboard"} /></Link>
                <Link to={"/"}><Button buttonName={'MyPosts'} /></Link>
            </>
        )
    } else {
        navList = (
            <>
                <Link to={'/posts'}><Button buttonName={'Posts'} /></Link>
                <Link to={'/about'}><Button buttonName={'About'} /></Link>
            </>
        )
    }

    return (
        <nav>
            <div class="nav-wrapper container">
                <a href="#" class="brand-logo">Bit Crud</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">

                    {navList}


                    {/* <li><Link to='/Dashboard'>Dashboard</Link></li>
                    <li><Link to='/'>Posts</Link></li> */}
                </ul>
            </div >
        </nav >
    )
}

export default Header