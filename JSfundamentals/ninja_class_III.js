class Ninja
{
            constructor(name, health=100, speed=3, strength=3) 
            {
            this.name = name;
            this.health = health;
            this.speed = speed;
            this.strength = strength;
            }

         display() 
         {
            console.log(`My name is: ${this.name} my health is: ${this.health} my speed is: ${this.speed} my strength is: ${this.strength}`);   
         
        }
        
        drinkSake() 
        {
            this.health = this.health + 10;
            console.log(`Now I'm feeling good and my health is currently:  ${this.health}`);
            return this;
        }
       
       
        kick(potato) 
        {
                potato.health -= 15;
                console.log(`${this.name}  kicked  ${potato.name} health = ${potato.health}`);
                return this;
        }

}

class Sensie extends Ninja  
    {
        
            constructor(name, health=200, speed=10, strength=10, wisdom=10)
        {
            super(name, health=200, speed=10, strength=10)
            this.wisdom = wisdom;
        }
    speakWisdom() 
    {
        const message = super.drinkSake();
        console.log("I'm a cool fucking dude ass Sensie")
        return this
    }
}


const redNinja = new Ninja("Jimmy John")
const blueNinja = new Ninja("Dave McGee")
// redNinja.kick(blueNinja).kick(blueNinja)
// redNinja.display()
// blueNinja.display()
// redNinja.drinkSake()
const coolSensie = new Sensie("Joe Smoe")

console.log(Sensie);
coolSensie.display()
coolSensie.drinkSake()
coolSensie.speakWisdom().speakWisdom().speakWisdom().speakWisdom()