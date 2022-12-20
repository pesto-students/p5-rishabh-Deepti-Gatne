import React from "react";

export default function DoneItems(props) {
  return (
    <div>
      <h5> {props.done.title}</h5>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          props.onUndone(props.done);
        }}
      >
        UnDone
      </button>
    </div>
  );
}
