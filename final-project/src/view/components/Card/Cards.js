import React from 'react'
import Card from '../Card/Card'

const Cards = (props) => {
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}
export default Cards