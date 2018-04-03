var express = require('express');
var router = express.Router();

//Add require that point to Employee controller.

var employee = require("../controllers/EmployeeController.js");

//CRUD functions.

// Get all employees
router.get('/', employee.list);

// Get single employee by id
router.get('/show/:id', employee.show);

// Create employee
router.get('/create', employee.create);

// Save employee
router.post('/save', employee.save);

// Edit employee
router.get('/edit/:id', employee.edit);

// Edit update
router.post('/update/:id', employee.update);

// Edit update
router.post('/delete/:id', employee.delete);
//export

    module.exports = router;


    var employees = require('./routes/employees');


app.use('/employees', employees);