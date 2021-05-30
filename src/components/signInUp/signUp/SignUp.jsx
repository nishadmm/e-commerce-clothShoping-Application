import React, { Component } from 'react'

import FormInput from '../FormInput'
import CustomButton from '../../customButton/CustomButton'
import './SignUp.style.scss'

import { auth, getUserDataFromDB } from '../../../firebase/Firebase.utils'

 class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log('submit');
        const { displayName, email, password, confirmPassword  } = this.state
        if(password !== confirmPassword) {
            alert("Password does not match")
            return
        }
        try {        
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await getUserDataFromDB(user, {displayName})
            
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })
    
    render() {
        const { displayName, email, password, confirmPassword  } = this.state
        return (
            <div className="sign-up" >
                <h2 className="title">I do not have a account</h2>
                <span>Sign Up with email and password</span>
                <form className="signup-form" onSubmit={this.handleSubmit}  >
                    <FormInput
                        type= "text"
                        name="displayName"
                        value={displayName}
                        onChange = {this.handleChange}
                        label= "Display name"
                    />
                    <FormInput
                        type= "email"
                        name="email"
                        value={email}
                        onChange = {this.handleChange}
                        label= "Email"
                    />
                    <FormInput
                        type= "password"
                        name="password"
                        value={password}
                        onChange = {this.handleChange}
                        label= "Password"
                        autoComplete= 'off'
                    />
                    <FormInput
                        type= "password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange = {this.handleChange}
                        label= "Confirm Password"
                        autoComplete= 'off'
                    />
                    <CustomButton type="submit" >Sign Up</CustomButton>
                </form>
                
            </div>
        )
    }
}

export default SignUp
