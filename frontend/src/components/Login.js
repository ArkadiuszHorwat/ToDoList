import React from 'react';

function Login({ onSubmit, onChangeLogin, onChangePassword }) {

    return (
        <form title='form' onSubmit={onSubmit}>
            <input 
                title='inputLogin'
                type="text"
                placeholder='Enter your login'
                onChange={onChangeLogin}
                required
            />
            <input 
                title='inputPassword'
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
