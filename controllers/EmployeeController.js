var mongoose = require("mongoose");
var Employee = mongoose.model("Employee");
var employeeController = {};
employeeController.list = function(req, res) {
    Employee.find({}).exec(function (err, employees) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../views/employees/index", {employees: employees});
        }
    });
};