import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import ToDoList from './components/ToDoList';
import Axios from 'axios';

function App() {
  const [activePage, setActivePage] = useState(false);

  const [userLogin, setUserLogin] = useState('');
  const [userPasswd, setUserPasswd] = useState('');
  const [correctLog, setCorrectLog] = useState(false);

  const handleOnSubmitLogin = e => {
    e.preventDefault();

    Axios.post('http://localhost:3001/login', {
        userlogin: userLogin,
        userpasswd: userPasswd
    }).then(response => {
        setCorrectLog(response.data);
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
    setCorrectLog(false);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      {!correctLog && <input type='button' value='Sign up' onClick={handleButtonR} />}
      {
        correctLog ?
        <input type='button' value='Sign out' onClick={handleButtonO} />
        :
        <input type='button' value='Sign in' onClick={handleButtonL} />
      }
      {
        correctLog ? 
        <ToDoList />
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
