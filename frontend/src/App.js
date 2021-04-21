import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import ToDoList from './components/ToDoList';
import Axios from 'axios';

function App() {
  const [activePage, setActivePage] = useState(null);

  const [userLogin, setUserLogin] = useState('');
  const [userPasswd, setUserPasswd] = useState('');
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  const handleOnSubmitLogin = e => {
    e.preventDefault();

    Axios.post('http://localhost:3001/login', {
      userlogin: userLogin,
      userpasswd: userPasswd
    }).then(response => {
      if(response.data){
        localStorage.setItem('userLogin', userLogin);
        localStorage.setItem('userPassword', userPasswd);
        setActivePage(true);
        localStorage.setItem('userId', response.data[0].user_id);
        setUserId(localStorage.getItem('userId'));
      }
    });
  }

  const handleOnChangeLogin = event => {
    setUserLogin(event.target.value);
  }

  const handleOnChangePassword = event => {
    setUserPasswd(event.target.value);
  }

  const handleButtonR = () => {
    setActivePage(true);
  }

  const handleButtonL = () => {
    setActivePage(false);
  }

  const handleButtonO = () => {
    setActivePage(false);
    setUserLogin('');
    setUserPasswd('');
    localStorage.removeItem('userLogin');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('userId');
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      {localStorage.getItem('userLogin') === null  && <input type='button' value='Sign up' onClick={handleButtonR} />}
      {
        localStorage.getItem('userLogin') != null ?
        <input type='button' value='Sign out' onClick={handleButtonO} />
        :
        <input type='button' value='Sign in' onClick={handleButtonL} />
      }
      {
        localStorage.getItem('userLogin') != null ? 
        <ToDoList userId={userId}/>
        :
        activePage ? 
        <Register /> 
        : 
        <Login 
          onSubmit={handleOnSubmitLogin} 
          onChangeLogin={handleOnChangeLogin} 
          onChangePassword={handleOnChangePassword}
        />
      }
    </div>
  );
}

export default App;
