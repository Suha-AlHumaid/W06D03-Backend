const express = require("express");
const {
  getAllTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleTodo,
} = require("../controllers/todos");
const todosRouter = express.Router();
///show todos data
todosRouter.get("/todos", getAllTodos);
// get task by query
todosRouter.get("/todo/", getTodo);

////add new task
todosRouter.post("/todo", addTodo);

//Update list by id
todosRouter.put("/todo/:id", updateTodo);

//Soft delete
todosRouter.put("/delete/:id", deleTodo);
module.exports = todosRouter;
