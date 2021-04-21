import Axios from 'axios';
import React, { useState, useEffect } from 'react';

function ToDoList({ userId }) {
  const [item, setItem] = useState('');
  const [status, setStatus] = useState(null);
  const [listItem, setListItem] = useState([]);

  const [updateItem, setUpdateItem] = useState('');

  useEffect(() => {
    Axios.get(`http://localhost:3001/item/get/${userId}`).then(response => {
      setListItem(response.data);
    });

    setStatus(null);
  }, [userId, status]);

  const handleOnSubmit = () => {
    Axios.post('http://localhost:3001/item/insert', {
      item: item,
      status: status,
      userId: userId
    }).then(response => {
      console.log(response);
    });
  }

  const handleChange = e => {
    setItem(e.target.value);
    setStatus(false);
  }

  const handleDelete = itemId => {
    Axios.delete(`http://localhost:3001/item/delete/${itemId}`);
    setStatus(true);
  }

  const handleChangeUpdate = e => {
    setUpdateItem(e.target.value);
  }

  const handleUpdate = itemId => {
    Axios.put('http://localhost:3001/item/update', {
      itemId: itemId,
      newItem: updateItem
    });
    setUpdateItem('');
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
        <input className='button'
          type='submit'
          value='Add'
        />
      </form>
      <ul>
        {
          listItem.map(item => {
            return <li key={item.item_id}>
              {item.item_description}
              <form className='form-update' onSubmit={()=>{handleUpdate(item.item_id)}}>
                <input 
                  type='text' 
                  placeholder='Update'
                  onChange={handleChangeUpdate} 
                  required/>
                <input className='update' type='submit' value='update'/>
              </form>
              <i className="fa fa-trash" onClick={()=>{handleDelete(item.item_id)}}></i>
              </li>
          })
        }
      </ul>
    </div>
    );
}

export default ToDoList;
