/*function  Automobile (wheels){
    this.wheels = wheels;
    this.setColor = (color)=>{
        this.color = color;
    }
    this.getColor = () => {
        return this.color;
    }
}
function Motorcycle(make, model, year){
this.make = make;
this.model = model;
this.year = year;
}
Motorcycle.prototype = new Automobile(2);

function Sedan(make, model, year){
    this.make = make;   
    this.model = model;
    this.year = year;
    this.doors = 4;
}
Sedan.prototype = Automobile (4);


 

function Camry(){
    
}
Camry.protorype = new Sedan("Toyota", "Camry", 2010);

const camry = new Camry();
console.log(camry.wheels, camry.doors);
camry.year = 2010;
console.log(camry.year);


class Automobile{
    constructor(wheels){
        this.wheels = wheels
        this.color = null
    }
    setColor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
}

class Motorcycle extends Automobile{
    constructor(make, model, year){
        super(2)
        this.make = make;
        this.year = year;
        this.model = model;
    }
}*/
class Maybach extends Sedan{
    constructor(make, model, year,speed){
        super(4)
        this.make = make;
        this.year = year;
        this.model = model;
        this.door = 4;
        this.color = color;
        this.speed = speed;

    }
    setSpeed(speed){
        this.speed = speed;
    }
    getSpeed(){
        return this.speed;
    }
}
let maybach = new Maybach ("Mercedez", "Maubach", 2012, "Silver");
console.log (maybach);
