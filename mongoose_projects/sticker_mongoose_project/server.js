// Require the Express Module
var express = require('express');
// require mongoose
var mongoose = require('mongoose');
//Mongoose database connection
mongoose.connect('mongodb://localhost/gitObjects_sticker')
// create a mongoose schema
var StickerSchema = new mongoose.Schema({
    name: String,
    description: String
   },
   {timestamps: true}
)
   mongoose.model('Sticker', StickerSchema); // We are setting this Schema in our Models as 'User'

   var Sticker = mongoose.model('Sticker') // We are retrieving this Schema from our Models, named 'User'

// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    Sticker.find({}, function(err, stickers){
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('home', {stickers: stickers});
    })
})
// Add User Request 
app.post('/process', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var sticker = new Sticker({name: req.body.name, description: req.body.description});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    sticker.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
        console.log(err);
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/');
      }
    })
  })
  // The root route -- we want to get all of the users from the database and then render the index view passing it all of the users
app.get('/', function(req, res) {
    Sticker.find({}, function(err, stickers) {
      // This is the method that finds all of the users from the database
      // Notice how the first parameter is the options for what to find and the second is the
      //   callback function that has an error (if any) and all of the users
      // Keep in mind that everything you want to do AFTER you get the users from the database must
      //   happen inside of this callback for it to be synchronous 
      // Make sure you handle the case when there is an error, as well as the case when there is no error
    })
  })
app.post('/id_view/:id', function(req, res){
    
    console.log(req.params.id + "#############################################")
    var id = req.params.id;

    console.log("hit the ONE ONLY route ***********");
    res.render('one_sticker', {stickers:id})
})

  app.post('/destroy', function(req, res){
    console.log("Successfully removed all users from DB!");
      Sticker.remove({}, function(err){
        console.log("This happens after");
      })
      console.log('test');
      res.redirect('/');
  });
  
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening to rap/r&b hits on port 8000");
})
