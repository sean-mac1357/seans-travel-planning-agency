import React, { useState } from 'react';

const SignupForm = ({ handleReload }) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const _handleNameChange = (e) => {
        setUserName(e.target.value);
    }
    const _handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }
    const _handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    }

    const _handleSubmit = async (e) => {
        e.preventDefault();
        const submitResponse = await fetch('http://127.0.0.1:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_name: userName, user_email: userEmail, user_password: userPassword })
        }).then(
            (response) => response
        );
        console.log("submit response is: ", submitResponse);
        setUserName('');
        setUserEmail('');
        setUserPassword('')

        if (submitResponse.status === 200) {
            handleReload(true);
        }
    }

    return (
        <form onSubmit={_handleSubmit}>
            <label>
                First and Last Name
                <input 
                type="text"
                name="user_name"
                value={userName}
                onChange={_handleNameChange}/>
            </label>
            <label>
                User Email
                <input 
                type="text"
                name="user_Email"
                value={userEmail}
                onChange={_handleEmailChange}/>
            </label>
            <label>
                User Password
                <input 
                type="password"
                name="user_password"
                value={userPassword}
                onChange={_handlePasswordChange}/>
            </label>
            <button 
            type='submit'>
                Sign-Up
            </button>
        </form>
    );
};

export default SignupForm;