import { useState, useReducer } from 'react';

const ToDoList = ({items}) => {
  return (<>
    {items.map(item => (
      <div key={item.id} >{item.name}</div>
    ))}
  </>)
}

export default ToDoList;