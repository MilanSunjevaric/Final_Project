import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Button from '../Button/Button'
import SignIn from '../components/SignForms/SignIn'

const Footer = (props) => {

    const token = localStorage.getItem('jwtToken')



    let navList = ""

    if (token) {
        navList = (
            <>
                <Link to={'/SignIn'}><Button onClick={() => {
                    localStorage.removeItem('jwtToken')
                }} buttonName={'SignOut'} /></Link>
            </>
        )
    } else {
        navList = (
            <>

                {/* <Link to={'/SignIn'}><Button buttonName={'SignIn'} /></Link> */}
            </>
        )
    }




    return (
        <nav>
            <div class="nav-wrapper container">

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    © 2019 Copyright Text

                   {navList}
                </ul>
            </div>
        </nav >

    )
}

export default withRouter(Footer)



