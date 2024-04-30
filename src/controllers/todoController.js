// Import the Todo model
const Todo = require("../models/todo");

// Create a new todo item
exports.createTodo = async (req, res) => {
  try {
    const {title,user_id} = req.body;
    const todo = new Todo({title,user_id});
    const result = await todo.save();
    res.status(201).json({ todo: result });
  } catch (err) {
    res.status(500).json({ error: "Failed to create todo item" });
  }
};

// Get all todo items
exports.getTodos = async (req, res) => {
  try {
    const { user_id } = req.query; // Use req.query to access query parameters
    const todos = await Todo.find({ user_id }).populate("user_id");
    res.json({ todos: todos });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todo items" });
  }
};


// Delete a todo item
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo item not found" });
    }
    res.json({ message: "Todo item deleted successfully" });
  } catch (err) {
    console.error("Error deleting todo item:", err);
    res.status(500).json({ error: "Failed to delete todo item" });
  }
};

