import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

function App() {
  const [isClick, setIsClick] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_BASE_URL);
        console.log(response.data);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  async function addTask(data) {
    try {
      if (data.title !== "" && data.description !== "") {
        const response = await axios.post(API_BASE_URL + "/addTask", {
          title: data.title,
          description: data.description,
        });
        console.log(response);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTask(id) {
    try {
      const response = await axios.delete(API_BASE_URL + `/deleteTask/${id}`);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async function completedTask(id) {
    try {
      const response = await axios.patch(
        API_BASE_URL + `/completedTask/${id}`,
      );
      console.log(response);
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick() {
    setIsClick((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <>
      <div className="header">
        <h1>Tasks</h1>
        {isClick ? (
          <AddTask add={addTask} />
        ) : (
          <button id="create" onClick={handleClick}>
            Add
          </button>
        )}
      </div>
      {tasks.map((task) => {
        return (
          <Tasks
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            completed={task.completed}
            delete={deleteTask}
            complete={completedTask}
          />
        );
      })}
    </>
  );
}

export default App;
