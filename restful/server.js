const xp = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')



const app = xp();

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/rtapi')

mongoose.promise = global.Promise;

const DbSchema = new mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String, default: ""},
    completed: {type: Boolean, default: false}
}, {timestamps: true});

const Tasks = mongoose.model('tasks', DbSchema);


app.get('/', function(req, res){
    res.json({success: "newindex"})
});
//retrieve all
app.get('/tasks', function(req, res){
    Tasks.find({}, function(err, data){
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })
});
app.get('/tasks', function(req, res){
    Tasks.find({}, function(err, data){
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })
});
//get 1 task with id
app.get('/tasks/:id', function(req, res){
    Tasks.findById(req.params.id, function(err, data){
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })
});

app.delete('/tasks/:id', function(req, res){
    Tasks.findByIdAndRemove(req.params.id, function(err, data){
        if(err){
            res.json(err)
        }else{
            res.json(data)
        }
    })
});

//update
app.put('/tasks/:id', function(req, res){
    Tasks.findById(req.params.id, function(err, data){
        if(err){
            res.json(err)
        }else{
            if(req.body.title){
                data.title = req.body.title
            }
            if(req.body.description){
                data.description = req.body.description
            }
            if(req.body.completed){
                data.completed = req.body.completed
            }
            data.save(function(err){
                    if(err){
                        res.json(err)
                    }else{
                        res.json(err)
                        }
            })
        }
    })
});
//     bob.save(function(errrrrrrrs){
//         if(errrrrrrrs){
//             console.log("stuff n things isnt funny")
//         }
//     })
// // need a redirect to tasks

// app.put('/tasks/:id', function(req, res){
//     let updatedInfo = {
//         'title': req
//     }
//     Tasks.updateOne({_id: req.params.id}, updatedInfo, function(err))
// });

app.listen(8000, function() {
    console.log("listening on port 8000 Ryan Secrest where you at homie homes");
});