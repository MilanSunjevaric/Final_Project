import React from 'react'

const CheckBox = (props) => {

    return (

        <p>
            <label>
                <input type="checkbox" name={props.name} value={props.value} />
                <span>{props.here}</span>
            </label>
        </p>
    )
}

export default CheckBox