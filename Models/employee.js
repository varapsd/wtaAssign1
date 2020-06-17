var mongoose = require('mongoose');
var employeeSchema = mongoose.Schema({
    empId: {
        type: String
    },
    empName:{
        type: String
    },
    empJdate:{
        type: String
    }

});

// Export adminLoginModel model
module.exports ={

    Employee:mongoose.model('Employee', employeeSchema,"employee"),
    EmployeeSchema:employeeSchema
   }
