const taskServices = require("../services/database");

const getAllTasks = async (req, res) => {
  const tasks = await taskServices.getTasks();

  res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  // console.log(req.body, "Body................");
  const task = await taskServices.createTask(req.body);
  // console.log(task);
  res.status(201).json(task);
};

const completedTask = async (req, res) => {
  const task = await taskServices.completedTask(req.params.id);
  res.status(200).json(task);
};

const deleteTask = async (req, res) => {
  const task = await taskServices.deleteTask(req.params.id);

  res.status(200).json(task);
};

module.exports = { getAllTasks, createTask, deleteTask, completedTask };
