import React from 'react'

const CheckBox = (props) => {
    const onChangeHandler = (e) => {
        props.onChange(e.target.checked)
    }

    return (

        <p>
            <label>
                <input type="checkbox" name={props.name} checked={props.checked} onChange={onChangeHandler} />
                <span>{props.here}</span>
            </label>
        </p>
    )
}

export default CheckBox