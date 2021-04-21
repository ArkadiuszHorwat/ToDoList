import React from 'react';

function Login({ onSubmit, onChangeLogin, onChangePassword }) {

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder='Enter your login'
                onChange={onChangeLogin}
                required
            />
            <input 
                type="password"
                placeholder="Enter your password"
                onChange={onChangePassword}
                required
            />
            <input className='button'
                type='submit'
                value='sign in'
            />
        </form>
    );
}

export default Login;
