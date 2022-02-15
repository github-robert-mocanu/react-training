import React from "react";
import './FormInput.css'
export function FormInput ({label, id ,onChange, ...inputProps}) {
    return(
        <div className={'form-input'}>
            <label>{label}</label>
            <input {...inputProps} onChange={onChange}/>
        </div>
    )
}