const mongoose = require("mongoose");

const Schema = mongoose.Schema//This line extracts the Schema constructor from the mongoose object. It's a shortcut for mongoose.Schema, allowing you to define new schemas more concisely.

const employeeSchema = new Schema({//You use the Schema constructor to create a new schema object that represents the structure of the documents in your MongoDB collection.
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    phone:{
        type:Number
    }
},{timestamps:true})

const Employee = mongoose.model('Employee',employeeSchema)//After defining a schema, you create a model. The model is a compiled version of the schema and is used to interact with the corresponding MongoDB collection.
module.exports = Employee