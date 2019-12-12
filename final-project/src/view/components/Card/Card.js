import React from 'react'
import '../Card/Card.css'
import { Link } from 'react-router-dom'
import pic from '../../../Image/vuk.jpg'
import User from '../Users/User'
import Author from '../Author/Author'
import UserList from '../Users/UserList'

const Card = (props) => {
    return (


        <div className="col s12 m4 content">
            <div className="kartica">
                <img src={pic} alt="" />

            </div>

            <div className="kartica-sadrzaj">
                <h3 className="naslov-kartice">{props.title}</h3>
                <p className="nesto">{props.text}</p>
            </div>
            <div className="author-content">
                <p>{props.subtitle}</p>
            </div>
            <div className="author-div">
                Author name:
                    <Author userId={props.userId} />
            </div>

        </div>


    )
}
export default Card