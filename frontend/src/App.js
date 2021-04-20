import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Register />
      <Login />
      <ToDoList />
    </div>
  );
}

export default App;
