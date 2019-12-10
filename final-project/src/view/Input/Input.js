import React from 'react'


const Input = (props) => {
    const onChangeHandler = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <div class="form-row" >
            <div class="form-group col-md-6">
                <label >
                    {props.label}
                    <input type={props.inputType} class={props.inputClass} id={props.inputId} placeholder={props.placeholder} onChange={onChangeHandler} />
                </label>
            </div>
        </div>

    )
}
export default Input