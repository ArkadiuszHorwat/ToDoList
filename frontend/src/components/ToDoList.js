import Axios from 'axios';
import React, { useState, useEffect } from 'react';

function ToDoList({ userId }) {
  const [item, setItem] = useState('');
  const [status, setStatus] = useState(null);
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    getData();
  }, [userId, listItem]);

  const getData = () => {
    Axios.get(`http://localhost:3001/item/get/${userId}`).then(response => {
      setListItem(response.data);
    });
  }

  const handleOnSubmit = e => {
    e.preventDefault();

    Axios.post('http://localhost:3001/item/insert', {
      item: item,
      status: status,
      userId: userId
    }).then(response => {
      console.log(response);
    });

    getData();
  }

  const handleChange = e => {
    setItem(e.target.value);
    setStatus(false);
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input 
          type='text'
          placeholder='Enter to do item...'
          onChange={handleChange}
          required
        />
        <input 
          type='submit'
          value='Add'
        />
      </form>
      <ul>
        {
          listItem.map(item => {
            return <li key={item.item_id}>
              {item.item_description}
              </li>
          })
        }
      </ul>
    </div>
    );
}

export default ToDoList;
