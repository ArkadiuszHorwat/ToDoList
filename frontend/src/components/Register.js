import React, {useState} from 'react';
import Axios from 'axios';

function Register() {
    const [userName, setUserName] = useState('');
    const [userLogin, setUserLogin] = useState('');
    const [userPasswd, setUserPasswd] = useState('');

    const handleOnSubmitRegister = () => {

        Axios.post('http://localhost:3001/register', {
            username: userName,
            userlogin: userLogin,
            userpasswd: userPasswd
        }).then(() => {
            alert('registration completed')
        });
    }

    const handleOnChangeName = event => {
        setUserName(event.target.value);
    }

    const handleOnChangeLogin = event => {
        setUserLogin(event.target.value);
    }

    const handleOnChangePassword = event => {
        setUserPasswd(event.target.value);
    }

    return (
        <form onSubmit={handleOnSubmitRegister}>
            <input 
                type='text'
                placeholder='Enter your name'
                onChange={handleOnChangeName}
                required
            />
            <input 
                type="text"
                placeholder='Enter your login'
                onChange={handleOnChangeLogin}
                required
            />
            <input 
                type="password"
                placeholder="Enter your password"
                onChange={handleOnChangePassword}
                required
            />
            <input className='button'
                type='submit'
                value='sign up'
            />
        </form>
    );
}

export default Register;
