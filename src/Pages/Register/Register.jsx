import React, {useState} from 'react'
import './Register.css'
import {FormInput} from '../../Components/FormInput/FormInput'
import {registerInput} from "../../Data/inputData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export function Register ({setUser}) {
    const [values, setValues] = useState(defaultValues)

    function handleSubmit  (e)  {
        e.preventDefault()

        if(!values.username.match("^[A-Za-z0-9]{3,16}$")){
            toast.error("Username should be 3-16 characters and shouldn't include any special character!")
            return
        }

        if(!values.password.match("^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$")){
            toast.error("Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!")
            return
        }

        if(values.password !== values.confirmPassword){
            toast.error("Passwords don't match")
            return
        }

        console.log(values)
        setUser(true)
        setValues(defaultValues)
    }

    function handleChange (e) {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return( <div>
        <div className={"register"}>
            <form  className={'register-form'} onSubmit={handleSubmit}>
                <h1 className={'register-form-title'}>Vrea Staniga sa scriu ceva</h1>
                {registerInput.map((input) =>
                    (<FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange}/>))}
                <button className={"register-form-submit-btn"}>Submit</button>
                <ToastContainer/>
            </form>
        </div>
    </div>)
}