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


// Routers 
 ///show todos data
 app.get("/todos", (req,res)=>{
  res.status(200).json(toDos)
})
// get task by query
app.get("/todo/", (req, res) => {
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
});

////add new task
app.post("/todo", (req, res) => {
  let newId = toDos.length;
  const { name, isComplete, isDele } = req.body;
  toDos.push({ name, isComplete, isDele, id: newId });
  res.status(200).json(toDos);
});


  //Update list by id
  app.put("/todo/:id", (req,res)=>{
    const {id}= req.params
    const {name} = req.body
    toDos.forEach(elem =>{
    if(elem.id == id) {
      elem.name = name
    }
    })
    res.status(200).json(toDos)
    })


  //Soft delete
  app.put("/delete/:id", (req,res)=>{
    const {id} = req.params
    toDos.forEach(elem=>{
      if(elem.id == id){
        elem.isDele = true
      }
    })
    res.status(200).json(toDos)
    })

  

///////////////////////////
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
