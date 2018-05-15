const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
mongoose.connect('mongodb://localhost/rtapi');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/mondayAngular/dist/mondayAngular' ));

// db stuff
const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false}
},{timestamps: true});

const Task = mongoose.model('Task', TaskSchema);

// Read all rout *index route*
app.get('/tasks', function(request, response){
    Task.find({}, function(err, data){
        if(err){
            console.log('we got errors:');
            console.log(err);
        } else {
            console.log("We did the grab of all the data base things")
            response.json(data);
        }
    })
});

//get one based off id
app.get('/tasks/:id', function(request, response){
    var id = new mongoose.Types.ObjectId(request.params.id);
    Task.findById(id, function(err, data){
        if(err){
            console.log('got errors');
            console.log(err);
        }else{
            console.log(data);
            response.json(data);
        }
    })
});
//add stuff to the thing IVE GIVEN UP
app.post('/tasks', function(request, response){
    let newTask = new Task(request.body);
    newTask.save(function(err){
        if(err){
            console.log('Hello, I am the post route console log for errrrrorrrrrs!');
            console.log(err);
        }
    });
    response.json({status: 'everything went okay!'});
});

app.put('/tasks/:id', function(request, response){
    Task.update({_id: mongoose.Types.ObjectId(request.params.id)},request.body,function(err, data){
        if(err){
            console.log('dun gooft');
            console.log(err);
        }else{
            console.log('updated');
            console.log(data);
            response.json({status: 'worked'});
        }
    })
});

//updates
app.put('/tasks/:id', function(request, response) {
    Task.findOneAndUpdate({id: req.params.id}, req.body, function(errs, data){
        if(err){
            console.log('dun gooft');
            console.log(err);
        }else{
            console.log('updated');
            console.log(data);
            response.json({status: 'worked'});
        }
    })
});

// delete the things
app.delete('/tasks/:id', function(request, response){
    var id = mongoose.Types.ObjectId(request.params.id);
    Task.remove({_id: id}, function(err){
        if(err){
            console.log(err);
            response.json({status: 'not worked'});
        }
    });
    response.json({status: 'worked'});
})






app.listen(8000, function(blah){
    console.log('Listening to old school rap on localhost 8000', blah);
});