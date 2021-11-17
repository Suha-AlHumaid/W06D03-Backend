const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT;

// App Level Middleware
app.use(express.json());
app.use(cors());

////////////////////////
let toDos = [
  { name: "Sleep", isDele: false, id: 0 }, //elem.name
  { name: "Eat", isDele: false, id: 1 }, //elem
  { name: "sleep Again", isDele: false, id: 2 }, //elem
];

// Todos
const todosRouter = require("./routers/routes/todos");
app.use("/todos", todosRouter);

///////////////////////////
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
