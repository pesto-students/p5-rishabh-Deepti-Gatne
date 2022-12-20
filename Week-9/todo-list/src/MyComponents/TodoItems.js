import React from 'react'

export default function TodoItems({todo,onDelete}) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-success' onClick={()=>{onDelete(todo)}}>Done</button>
      
    </div>
  )
}

