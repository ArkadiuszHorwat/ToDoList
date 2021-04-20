import React from 'react';

function Register() {
    return (
        <form>
            <input 
                type='text'
                placeholder='Enter your name'
            />
            <input 
                type="text"
                placeholder='Enter your login'
            />
            <input 
                type="password"
                placeholder="Enter your password"
            />
            <input 
                type='submit'
                value='submit'
            />
        </form>
    );
}

export default Register;
