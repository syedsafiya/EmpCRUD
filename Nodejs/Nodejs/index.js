const express = require('express');
const boyParser = require('body-parser');

const { Mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');


//saving express to app
var app = express();

//middleware to pass json data
app.use(boyParser.json());

//start express sever
app.listen(3000, () => console.log('Server started at port 3000'));

app.use('/employees', employeeController)