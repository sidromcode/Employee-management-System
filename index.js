const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const EmployeeRoute = require("./routes/employee");//This is the router object that contains the route definitions. It is typically imported from another module where routes are defined
const AuthRoute = require('./routes/auth')//importing the auth.js file in index file


 

mongoose.connect('mongodb://127.0.0.1:27017/testdb',{useNewUrlParser:true,useUnifiedTopology:true});
const db =  mongoose.connection 


db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log("The database established ")
})


const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
const port = 3004;
app.use('/api/employee',EmployeeRoute)//This is the base path at which the router will be mounted. Any routes defined within EmployeeRoute will be accessible under this path. For example, if EmployeeRoute has a route defined as /, it will be accessible as /api/employee/ in the application
app.use('/api',AuthRoute)
app.listen(port,()=>{
    console.log(`the server is running on port ${port}`);
})


