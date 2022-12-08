const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cruddb',(err) =>{
    if(!err)
    console.log('mongodb connection succeed');
    else
    console.log('Error in db connection: ' + JSON.stringify(err, undefined, 2));
});
module.exports = mongoose;