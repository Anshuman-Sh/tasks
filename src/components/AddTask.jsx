import React, { useState } from "react";

function AddTask(props) {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevText) => {
      return {
        ...prevText,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <div className="inputArea">
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={inputs.title}
              id="title"
              name="title"
              placeholder="Title"
              required="true"
            />
          </div>
          <div className="mb-3">
            <textarea
              rows="4"
              cols="50"
              className="form-control"
              onChange={handleChange}
              value={inputs.description}
              id="description"
              name="description"
              placeholder="Description"
              required="true"
            ></textarea>
          </div>
          <button
            id="add"
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              props.add(inputs);
            }}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
