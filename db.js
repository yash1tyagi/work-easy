const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI =  process.env.MONGO_URI
// const mongoURI = "mongodb://localhost:27017"

const connectToMongo = async ()=>{
mongoose.connect(mongoURI, ()=>{
console.log("Connect to mongo ");
})
}
module.exports = connectToMongo;

// atles - mongodb+srv://yash:<y1ash2tyagi>@cluster0.jatas.mongodb.net/mern?retryWrites=true&w=majority 
 
// compus - mongodb://localhost:27017/yash?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false


// {
//     // useNewUrlParser: true,
//    //  UseCreateIndex:true,
//      //useUnifiedTopology:true,
//      //useFindAndModify:false
//  },