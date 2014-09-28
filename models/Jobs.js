var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
   title : {type:String}, 
   description:{type:String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function () {
    console.log('Inside seedJobs ....');
    Job.find({}).exec(function(error, collection){
        console.log('Colllection Lenght = ' + collection.length);
        if (collection.length === 0) {
            Job.create({title:"Cook", description:"You will make bagels"});
            Job.create({title:"Waiter", description:"You will be putting food on peoples table"});
            Job.create({title:"Programmer", description:"You will be mindlessly typing"});
            Job.create({title:"Axe Maker", description:"We may need many axes ...."});
            
        }
    })
}