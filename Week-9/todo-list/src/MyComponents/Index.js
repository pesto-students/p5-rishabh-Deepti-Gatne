import Todos from "./Todos";


import AddTodo from "./AddTodo";
import Done from "./Done";
import React, { useState } from "react";


export default function Index() {
    const onDelete = (todo) => {
        console.log("Deleting", todo);
        setDone([...done, todo]);
        console.log(done);
        setTodos(
          todos.filter((e) => {
            return e !== todo;
          })
        );
      };
      const onUndone = (undo) => {
        console.log("Adding", undo);
        setTodos([...todos, undo]);
        console.log(done);
        setDone(
          done.filter((e) => {
            return e !== undo;
          })
        );
      };
      const addTodo = (title, desc) => {
        let srno = todos.length ? todos[todos.length - 1].srno + 1 : 1;
        const addItem = {
          srno,
          title,
          desc,
        };
    
        setTodos([...todos, addItem]);
      };
      const [done, setDone] = useState("");
      const [todos, setTodos] = useState([
        { srno: 1, title: "Go to market", desc: "to get chiilly" },
        { srno: 2, title: "Go to mall", desc: "to get dress" },
        { srno: 3, title: "Go to grocery shop", desc: "to get plates" },
      ]);
      return (
        <>
          <div className="conatainer">
            <div className="row">
              <div className="col">
                <Todos todo={todos} onDelete={onDelete} />
              </div>
    
              <div className="col">
                <AddTodo addTodo={addTodo} />
              </div>
    
              <div className="col">
                <Done done={done} onUndone={onUndone}/>
              </div>
            </div>
          </div>
          
        </>
      );
}
