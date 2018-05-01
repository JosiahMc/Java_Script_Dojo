// var ninja = 'Libby';
// setTimeout( function (){ console.log(ninja); }, 2000 ); 

// // assuming you have jQuery
$(document).ready(function(){
    var devName;
    // the given link is for Bulbasaur's information
    $.get("https://api.github.com/users/JosiahMc", function(data){ 
    	devName = data.name;
	console.log("Dev on this page is:", favoritePokemon);      // Predict the output!
    }
});       

