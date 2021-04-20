import React from 'react';

function Login() {
    return (
        <form>
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

export default Login;
