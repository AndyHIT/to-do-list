import { useState, useReducer } from 'react';

const NewToDo = () => {
  const [ todoItem, setTodoItem ] = useState('');
  const addNewToDoItem = (todoItem) => {
    console.log('save new to-do item')
  }
  return (<>
    <input
      type="text"
      value={todoItem}
      onChange={setTodoItem}
    />
    <button type="button" onClick={addNewToDoItem}>Add</button>
  </>)
}

export default NewToDo;