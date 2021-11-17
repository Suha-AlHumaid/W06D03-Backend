const getAllTodos = (req, res) => {
  res.status(200).json(toDos);
};

const getTodo = (req, res) => {
  try {
    const { id } = req.query;
    const todo = toDos.find((elem) => elem.id == id); // elem.id === Number(id)
    if (todo) {
      res.status(200).json(toDos);
    } else {
      res.status(400).json("not found");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const addTodo = (req, res) => {
  let newId = toDos.length;
  const { name, isComplete, isDele } = req.body;
  toDos.push({ name, isComplete, isDele, id: newId });
  res.status(200).json(toDos);
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  toDos.forEach((elem) => {
    if (elem.id == id) {
      elem.name = name;
    }
  });
  res.status(200).json(toDos);
};

const deleTodo = (req, res) => {
  const { id } = req.params;
  toDos.forEach((elem) => {
    if (elem.id == id) {
      elem.isDele = true;
    }
  });
  res.status(200).json(toDos);
};

module.exports = {
  getAllTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleTodo,
};
