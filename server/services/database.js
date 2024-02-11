const config = require("../config/config.js");
const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
  })
  .promise();

async function getTasks() {
  try {
    const [tasks] = await pool.query("SELECT * FROM tasks");
    return tasks;
  } catch (error) {
    return error;
  }
}

async function createTask(body) {
  try {
    const [task] = await pool.query(
      `INSERT INTO tasks (title, description)
      VALUES (?,?)`,
      [body.title, body.description]
    );

    return task;
  } catch (error) {
    return error;
  }
}

async function completedTask(id) {
  try {
    const [existingTask] = await pool.query(
      "SELECT * FROM tasks WHERE id = ?",
      [id]
    );
    if (existingTask[0].completed === 0) {
      const [task] = await pool.query(
        `UPDATE tasks SET completed = ${1} WHERE id = ?`,
        [id]
      );
      return task;
    } else {
      const [task] = await pool.query(
        `UPDATE tasks SET completed = ${0} WHERE id = ?`,
        [id]
      );
      return task;
    }
  } catch (error) {
    return error;
  }
}

async function deleteTask(id) {
  try {
    const [task] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);

    return task;
  } catch (error) {
    return error;
  }
}

module.exports = { getTasks, createTask, deleteTask, completedTask };
