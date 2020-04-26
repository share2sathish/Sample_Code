

function Shape(color){
    this.shapeColor = color;
}

Shape.prototype.duplicate = function(){
    console.log("Shape duplicate");
}


function extend(Child,Parent){
    // Inherit other Object
    Child.prototype = Object.create(Parent.prototype);
    // After overwrite teh prototype in in last statement repoint the constructor
    Child.prototype.constructor = Child;
       
}

function Circle(radius){

    Shape.call(this,'red');
    this.radius = radius;
    Shape.prototype.duplicate.call(this);
}    

extend(Circle,Shape)
Circle.prototype.draw = function (){
    console.log("Draw Circle..");
}
Circle.prototype.duplicate = function(){
    console.log("Override duplicate");
}

const c1 = new Circle(10)
const s1 = new Shape('Blue');
