import React from 'react'





const Button = (props) => {
    return (
        <button className="waves-effect waves-light btn" onClick={props.onClick} >{props.buttonName}
        </button>



    )
}
export default Button