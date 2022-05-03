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

class Sensei extends Ninja {
    constructor(name, health, speed, strength){
        super(name, health, speed, strength, "wisdom")
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10
    }

    speakWisdom(){
        this.wisdom += 10;
        console.log(this.name + "'s wisdom inscreased 10!", this.name + "'s wisdom is now " + this.wisdom);
    }

    showSensieStats() {
        console.log("Name:" + this.name, "Health: " + this.health, "Speed: " + this.speed, "Stregth: " + this.strength, "Wisdom: " + this.wisdom)
    }


}


const newSensie = new Sensei("Miagi", 200, 10, 10, 10)
newSensie.showSensieStats()
newSensie.speakWisdom()
newSensie.showSensieStats()