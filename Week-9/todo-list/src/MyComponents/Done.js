import React from "react";
import DoneItems from "./DoneItems";

export default function Done(props) {
  const myStyle = {
    minhight: "70vh",
  };
  return (
    <>
      <div className="container" style={myStyle}>
        <h3 className="text-center my-3">Done List</h3>

        {props.done.length === 0 ? (
          <h4>Nothing Completed</h4>
        ) : (
          props.done.map((done) => {
            return <DoneItems done={done} key={done.srno} onUndone={props.onUndone}  />;
          })
        )}
      </div>
    </>
  );
}
