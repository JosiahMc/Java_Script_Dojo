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
        console.log("like I've told you <number of function call times> MY NAME ISSSS!!!!!!!.... " + this.name)
        return this;
    }
    this.showStats = function() {
        console.log("health rating " + this.health + " speeeeeed: " + speed + " strongness level: " + strength );
        return this;

    }
    this.drinkSake = function() {
        this.health = this.health + 10;
        // console.log("Now I'm feeling good and my health is currently:" + health);
        return this;
    }
    this.punch = function(potato) {
            potato.health -= 5;
            console.log(this.name + " punched " + potato.name);
            return this;
        }
        this.kick = function(potato) {
            potato.health -= 15;
            console.log(this.name + " kicked " + potato.name);
            return this;
        }
    
    
};

var blueNinja = new myNinjaConstructor("Bilbo Swaggins")
var redNinja = new myNinjaConstructor("Cheech the Chong")
// console.log(Ninja1)
// blueNinja.display()
// blueNinja.sayName()
blueNinja.drinkSake().drinkSake().drinkSake().showStats()
console.log(blueNinja.health)
// blueNinja.showStats()
// blueNinja.display()
redNinja.showStats()
redNinja.punch(blueNinja).punch(blueNinja)
blueNinja.display()
console.log("*************************************")
// blueNinja.health = 0;
// console.log(blueNinja.health)
// blueNinja.display()
// redNinja.display()
redNinja.kick(blueNinja).kick(blueNinja)



