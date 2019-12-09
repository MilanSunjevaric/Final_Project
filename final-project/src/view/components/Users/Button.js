import React from 'react'





const Button = (props) => {
    return (
        <span className="waves-effect waves-light btn" onChange={props.onChange} >{props.buttonName}</span>

    )
}
export default Button