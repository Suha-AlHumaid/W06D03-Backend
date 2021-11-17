const express = require("express"); //to create express app
const app = express(); //call express
const dotenv = require("dotenv");
const cors = require("cors");
app.use(express.json()); //Json data
dotenv.config();
const PORT = process.env.PORT;

///////////////////////////////////////////////////
app.listen(4000, () => {
  console.log(`server is running ${PORT}`);
});
