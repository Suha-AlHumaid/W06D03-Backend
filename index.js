const express = require("express"); //to create express app
const app = express(); //call express

app.use(express.json()); //Json data


////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
