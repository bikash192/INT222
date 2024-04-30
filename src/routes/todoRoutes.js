const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Create a new todo item
router.post("/", todoController.createTodo);

// Get all todo items
router.get("/", todoController.getTodos);

// Update a todo item
// router.put("/:id", todoController.updateTodo);

// Delete a todo item
router.delete("/:id", todoController.deleteTodo);

module.exports = router;