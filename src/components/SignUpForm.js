import React from 'react';
import { useState } from 'react';
import { signUp } from '../utilities/users-service'


const SignUpForm = () => {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
    })

    const [error, setError] = useState('')

    const handleChange = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value })
        setError('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            // ^ create formData from userData to send to backend
            const formData = {
                name: info.name,
                email: info.email,
                password: info.password
            }
            console.log(JSON.stringify(formData))
            const user = await signUp(formData)
            console.log(user)
            // setUser(user)
        } catch {
            // ^ An error occurred
            setError('Sign Up Failed - Please Try Again')
        }

    }
    const disable = info.password !== info.confirm;
    return (
        <div>
            <h1>Sign-Up to Grade Your Days!</h1>
            <div className="form-container">
                <form className='form' autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={info.name}
                        onChange={handleChange} required />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={info.email}
                        onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={info.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={info.confirm} onChange={handleChange} required />
                    <button className='signup-btn' type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}

export default SignUpForm;
