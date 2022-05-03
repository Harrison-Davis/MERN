// Ninja Assingment

class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = speed = 3;
        this.strength = strength = 3;
    }
    sayName() {
        console.log("Name: " + this.name);
    }
    
    showStats() {
        console.log("Name:" + this.name, "Health: " + this.health, "Speed: " + this.speed, "Stregth: " + this.strength)
    }
    
    drinkSake(){
        this.health += 10;
        console.log(this.name + "'s health inscreased 10!", this.name + "'s health is now " + this.health )
    }
}


const newNinja = new Ninja("Hyabusa", 100, 65, 80);
console.log(newNinja);
newNinja.sayName();
newNinja.showStats();
newNinja.drinkSake()