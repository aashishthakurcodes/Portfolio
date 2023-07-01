//setting Express js
const express = require('express')
const app = express();
const port=5000

const mongoDb=require('./db');
mongoDb();
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use(express.json())
app.use('/api', require("./Routes/Createuser"));
app.listen(port,()=>{
    console.log(`App is listning on port  ${port}`);
})