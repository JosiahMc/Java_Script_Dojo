var myNinjaConstructor = function(name, health=100, speed=3, strength=3) {
    this.name = name;
    this.health = health;
    var speed = speed;
    var strength = strength;

    this.display = function() {
        console.log("My name is: " + this.name + " my health is: " + this.health + " my speed is: " + speed + " my strength is: " + strength );
        return this;
   
    }
    this.sayName = function() {
        console.log("like I've told you <number of function call times> MY NAME ISSSS!!!!!!!.... " + name)
        return this;
    }
    this.showStats = function() {
        console.log("health rating " + health + " speeeeeed: " + speed + " strongness level: " + strength );
        return this;

    }
    this.drinkSake = function() {
        health = health + 10;
        // console.log("Now I'm feeling good and my health is currently:" + health);
        return this;
    }
};

var Ninja1 = new myNinjaConstructor("Bob")
// console.log(Ninja1)
Ninja1.display()
Ninja1.sayName()
Ninja1.drinkSake().drinkSake().drinkSake().showStats()