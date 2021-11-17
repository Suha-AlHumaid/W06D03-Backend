const express = require("express"); //to create express app
const app = express(); //call express
const dotenv = require("dotenv");
const cors = require("cors");
app.use(express.json()); //Json data
dotenv.config();
const PORT = process.env.PORT;
////////////////////////
let toDos = [
  { name: "Sleep", isDele: false , id: 0 },//elem.name
  { name: "Eat", isDele: false , id: 1},//elem
  { name: "sleep Again", isDele: false, id: 2 },//elem
];

 ///show todos data
 app.get("/todos", (req,res)=>{
  res.status(200).json(toDos)
})

///////////////////////////
app.listen(4000, () => {
  console.log(`server is running ${PORT}`);
});
