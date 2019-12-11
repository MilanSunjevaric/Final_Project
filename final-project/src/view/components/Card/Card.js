import React from 'react'
import '../Card/Card.css'
import { Link } from 'react-router-dom'
import pic from '../../../Image/vuk.jpg'
import User from '../Users/User'
import Author from '../Author/Author'
import UserList from '../Users/UserList'

const Card = (props) => {
    return (

        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={pic} alt="" />

                </div>
                <div className="card-content">
                    <h3 className="card-title">{props.title}</h3>
                    <p>{props.text}</p>
                </div>
                <div className="author-content">
                    <p>{props.subtitle}</p>
                </div>
                <div>
                    Author name:
                    {/* <UserList /> */}
                </div>
            </div>
        </div>

    )
}
export default Card