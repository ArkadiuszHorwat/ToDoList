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
        <form title='registerForm' onSubmit={handleOnSubmitRegister}>
            <input 
                title='inputName'
                type='text'
                placeholder='Enter your name'
                onChange={handleOnChangeName}
                required
            />
            <input 
                title='inputLogin'
                type="text"
                placeholder='Enter your login'
                onChange={handleOnChangeLogin}
                required
            />
            <input 
                title='inputPassword'
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
