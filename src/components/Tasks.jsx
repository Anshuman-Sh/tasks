import React, { useState } from "react";

function Tasks(props) {
  const [isCompleted, setCompleted] = useState(props.completed);

  function handleClick() {
    if (isCompleted === 1) {
      setCompleted(0);
    } else {
      setCompleted(1);
    }
  }

  return (
    <div className="container">
      <div className="taskContainer">
        <div className="title">
          <h4>{props.title}</h4>
        </div>
        <div className="desc">
          <p>{props.description}</p>
        </div>
        <div className="delete">
          <button
            id="delete-button"
            onClick={() => {
              props.delete(props.id);
            }}
          >
            Delete
          </button>
        </div>
        <div className="completed-checkbox">
          <button
            id="completed-button"
            onClick={() => {
              handleClick();
              props.complete(props.id);
            }}
            style={{
              backgroundColor: isCompleted === 1 ? "blue" : "white",
              color: isCompleted === 1 ? "white" : "black",
            }}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
