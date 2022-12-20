import React from 'react'
import TodoItems from '../MyComponents/TodoItems'

function Todos(props) {
  const myStyle={
    minhight:"70vh",
    
  }
  return (
    <>
     <div className="container" style={myStyle}>
    <h3 className='text-center my-3'>To Do List</h3>
    {props.todo.length===0? <h3>No Todos</h3>:
    props.todo.map((todo)=>{
     return <TodoItems todo={todo} key={todo.srno}onDelete={props.onDelete}/>
    })}
     </div>
    </>
       


  );
}
export default Todos;
