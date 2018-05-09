var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_pack');
var session = require('express-session');
app.set('trust proxy', 1);// trust first proxy
app.use(session({
 secret: 'keyboard cat',
 resave: false,
 saveUninitialized: true,
 cookie: { maxAge: 60000 }
}));

var UserSchema = mongoose.Schema({
email: {type: String,required:[true,"email is required, dummy"]},
first_name:{type: String,required:[true,"first name is required, dummy"], maxlength: 30},
last_name: {type: String,required:[true,"last name is required, dummy"], maxlength: 30},
password: {type: String, required:[true,"password name is required, dummy"], minlength: 8}, 
date: {type: Date, required:[true,"Birthday name is required, dummy"]},

}, {timestamp: true});

mongoose.model('user', UserSchema);
var User=mongoose.model('user');


app.get('/',function(req,res){
	res.render('index');
});

app.post('/registration', function(req,res){
    var user= new User({email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, password: req.body.password, date: req.body.birthday});
        user.save(function(err){
        if(err){
            console.log("Something went wrong");
        }
        else{
            console.log("Successfully reggggggistereddddd");
            res.redirect('/');
        }
    });
});

app.post('/login', function(req,res){
    User.find({}, function(err, users){
        if(err){
            console.log("User not found");
        }
        else{
            console.log(req.body)
            for (var i =0; i< users.length; i++) {
                if(req.body.email==users[i].email){
                    console.log("user found")
                }
            }
                

            
            
            
        }
    });
 });

app.listen(8000, function() {
    console.log("listening on port 8000 Ryan Secrest where you at homie homes");
});
