const connectToMongo = require('./db');
const express = require('express')
var cors = require('Cors')
connectToMongo();
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

app.use(express.json());
// Avabile Routes
app.use('/api/auth', require('./Routes/auth'))
app.use('/api/notes', require('./Routes/notes'))
app.use('/api/data', require('./Routes/data'))

// // Heroku
// if (process.env.NODE_ENV == "production") {
//   const path = require("path");
//   app.get("/",(req, res)=>{
//     app.use(express.static(path.resolve(__dirname,'Frontend','build')));
//     res.sendFile(path.resolve(__dirname,'Frontend','build','index.html'));
//   })
// } 

if(process.env.NODE_ENV=='production'){
  const path = require('path')

  app.get('/',(req,res)=>{
      app.use(express.static(path.resolve(__dirname,'Frontend','build')))
      res.sendFile(path.resolve(__dirname,'Frontend','build','index.html'))
  })
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})