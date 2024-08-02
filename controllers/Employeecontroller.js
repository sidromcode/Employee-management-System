//const { response } = require("express");
const Employee = require("../models/Employee");


// // This code defines an asynchronous function named index which is typically used as a controller method in an Express.js route handler 
// to fetch and return a list of Employee documents from a MongoDB database.
const index = (req,res,next)=>{//index is a function that takes three arguments: req (the request object), res (the response object), and next (a function to pass control to the next middleware).
    Employee.find()//Employee.find() is a Mongoose method that retrieves all documents from the Employee collection. This returns a promise.
    .then(response=>{//If the promise resolves successfully, the .then method is called with response as the parameter.
        res.json({//res.json is a method in Express.js used to send a JSON response back to the client. It sets the Content-Type header to application/json and converts the given JavaScript object or array to a JSON string before sending it as the HTTP response body.
            response//The resolved response (which contains the list of Employee documents) is sent back to the client in JSON format using res.json.
        }) 
    })
    .catch(error=>{//If the promise is rejected (due to an error), the .catch method is called with error as the parameter.
        res.json({
            message:'An error occured'//An error message is sent back to the client in JSON format using res.json.
        })
    })
}



//The below code will return the details of a single employee based on th employee id provided in the req


const show = (req,res,next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(data =>{
        res.json({
            data
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occured'
        })
    })
}


//the below function will dexlare a store function which will add the details of employee to the database

const store = (req,res,next)=>{
    console.log('Request Body:', req.body);
    let employee = new Employee({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        phone:req.body.phone

    })
    employee.save()
    .then(response=>{
        res.json({
            message:"employee added succesfully"
        })
    })
    .catch(error=>{
        res.json({
            message:"Employee saving failed "
        })
    })
}


//the below code creates an funciton to update an employee with the employee ID


const update = (req,res,next)=>{
    let employeeID = req.body.employeeID
    let updatedData = {
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        phone:req.body.phone
    }
    Employee.findByIdAndUpdate(employeeID, { $set: updatedData })
    .then(() => {
        res.json({
            message: 'Updated successfully'
        });
    })
    .catch(error => {
        res.json({
            message: "Failed to update"
        });
    });
}

// Employee.findByIdAndUpdate(employeeID,{$set: updatedData})
// .then(()=>{
//     res.json({
//         message:'updated successfully'
//     })
// })
// .catch(error=>{
//     res.json({
//         message:"failed to update"
//     })
// })




//deleting the data of an employee

const destroy = (req,res,next)=>{
    let employeeID = req.body.employeeID
    Employee.findByIdAndDelete(employeeID)
    .then(()=>{
        res.json({
            message:"successfully deleted the emplyee data"
        })
    })
    .catch(error=>{
        res.json({
            message:"error occured!"
        })
    })
}

module.exports = {
    index, 
    show, 
    store, 
    update, 
    destroy
};
