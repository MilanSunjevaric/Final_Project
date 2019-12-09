import React from 'react'
import '../Card/Card.css'
import { Link } from 'react-router-dom'
const Card = (props) => {
    return (

        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={props.image} />

                </div>
                <div className="card-content">
                    <h3 className="card-title">{props.title}</h3>
                    <p>{props.body}</p>
                </div>
                <div className="author-content">
                    <p>{props.author}</p>
                </div>
            </div>
        </div>

    )
}
export default Card