import React from 'react'


const Input = (props) => {
    return (
        <div class="form-row" >
            <div class="form-group col-md-6">
                <label >
                    {props.label}
                    <input type={props.inputType} class="form-control" id={props.inputId} placeholder={props.placeholder} />
                </label>
            </div>
        </div>

    )
}
export default Input