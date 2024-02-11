const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/tasks.controllers");

router.get("/", taskControllers.getAllTasks);

router.post("/addTask", taskControllers.createTask);

router.patch("/completedTask/:id", taskControllers.completedTask)

router.delete("/deleteTask/:id", taskControllers.deleteTask);

module.exports = router;
