const fs = require("fs");

const getAllTodos = (req, res) => {
  try {
    fs.readFile("./db/data.json", function (err, data) {
      const toDos = JSON.parse(data.toString());
    const todos = toDos.filter((elem) => elem.isDele == false);
    res.status(200).json(todos);
  });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getTodo = (req, res) => {
  try {
    fs.readFile("./db/data.json", function (err, data) {
      const toDos = JSON.parse(data.toString());
    const { id } = req.query;
    const todo = toDos.find((elem) => elem.id == id); // elem.id === Number(id)
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(400).json("not found");
    }
  });
  } catch (error) {
    res.status(400).json(error);
  }
};

const addTodo = (req, res) => {
  fs.readFile("./db/data.json", function (err, data) {
    const toDos = JSON.parse(data.toString());
    let newId = toDos.length;
    const { name, isComplete, isDele } = req.body;
    toDos.push({ name, isComplete, isDele, id: newId });
    fs.writeFile("./db/data.json", JSON.stringify(toDos), () => {
      console.log("Added to file successfully");
    });
    res.status(200).json(toDos);
  });
};

const updateTodo = (req, res) => {
  fs.readFile("./db/data.json", function (err, data) {
    const toDos = JSON.parse(data.toString());
  const { id } = req.params;
  const { name } = req.body;
  toDos.forEach((elem) => {
    if (elem.id == id) {
      elem.name = name;
    }
  });
  res.status(200).json(toDos);
  fs.writeFile("./db/data.json", JSON.stringify(toDos), () => {
    console.log("Added to file successfully");
  });
});
};

const deleTodo = (req, res) => {
  fs.readFile("./db/data.json", function (err, data) {
    const toDos = JSON.parse(data.toString());
  const { id } = req.params;
  toDos.forEach((elem) => {
    if (elem.id == id) {
      elem.isDele = true;
    }
  });
  res.status(200).json(toDos);
  fs.writeFile("./db/data.json", JSON.stringify(toDos), () => {
    console.log("Added to file successfully");
  });
});
};

module.exports = {
  getAllTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleTodo,
};
