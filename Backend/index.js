//setting Express js
const express = require('express')
const app = express();
const port=5000

const mongoDb=require('./db');
mongoDb();
//CORS
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  next();
})
app.use(express.json())
app.use('/api', require("./Routes/Createuser"));
app.use('/api', require("./Routes/DisplayData"));
// app.use('/api', require("./info/:mealid"));
app.listen(port,()=>{
    console.log(`App is listning on port  ${port}`);
})