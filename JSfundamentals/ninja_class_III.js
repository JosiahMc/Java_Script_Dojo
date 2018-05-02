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
        
       
       
       
        kick(potato) 
        {
                potato.health -= 15;
                console.log(`${this.name}  kicked  ${potato.name} health = ${potato.health}`);
                return this;
        }

}

const redNinja = new Ninja("Chiggga my Ninja")
const blueNinja = new Ninja("Dave McGee")
redNinja.kick(blueNinja).kick(blueNinja)
redNinja.display()
blueNinja.display()
