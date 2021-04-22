import { render, fireEvent } from '@testing-library/react';

import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import ToDoList from './components/ToDoList';

describe('script components test', () => {
  //test get data function
  it('App to be correct render', () => {  
    const { queryByTitle } = render(<App />);
    const menu = queryByTitle('menu');
    const content = queryByTitle('content');

    expect(menu).toBeTruthy();
    expect(content).toBeTruthy();
  });

  it('Login to be correct render', () => {
    const { queryByTitle } = render(<Login />);
    const form = queryByTitle('form');

    expect(form).toBeTruthy();
  });

  it('Register to be correct render', () => {
    const { queryByTitle } = render(<Register />);
    const formRegister = queryByTitle('registerForm');

    expect(formRegister).toBeTruthy();
  });

  it('ToDoList to be correct render', () => {
    const { queryByTitle } = render(<ToDoList />);
    const formToDo = queryByTitle('formToDo');
    const ulToDo = queryByTitle('ulToDo');

    expect(formToDo).toBeTruthy();
    expect(ulToDo).toBeTruthy();
  });

  it('onChange Register events works correct', () => {
    const { queryByTitle } = render(<Register />);
    const inputN = queryByTitle('inputName');
    const inputL = queryByTitle('inputLogin');
    const inputP = queryByTitle('inputPassword');

    fireEvent.change(inputN, {target: { value: 'test' } });
    fireEvent.change(inputL, {target: { value: 'test' } });
    fireEvent.change(inputP, {target: { value: 'test' } });
    expect(inputN.value).toBe('test');
    expect(inputL.value).toBe('test');
    expect(inputP.value).toBe('test');
  });
  it('onChange Login events works correct', () => {
    const { queryByTitle } = render(<Login />);
    const inputL = queryByTitle('inputLogin');
    const inputP = queryByTitle('inputPassword');

    fireEvent.change(inputL, {target: { value: 'test' } });
    fireEvent.change(inputP, {target: { value: 'test' } });
    expect(inputL.value).toBe('test');
    expect(inputP.value).toBe('test');
  });
});