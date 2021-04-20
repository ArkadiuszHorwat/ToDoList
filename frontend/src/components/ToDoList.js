import React from 'react';

function ToDoList() {
    return (
        <div>
            <input 
                type='text'
                placeholder='Enter to do item...'
            />
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
            </ul>
        </div>
    );
}

export default ToDoList;
