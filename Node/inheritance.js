
function extend(Child,Parent){
    // Inherit other Object
    Child.prototype = Object.create(Parent.prototype);
    // After overwrite teh prototype in in last statement repoint the constructor
    Child.prototype.constructor = Child;
}

function Shape(color){
    this.shapeColor = color;
}

Shape.prototype.dup = function(){
    console.log("Shape duplicate");
}



function Circle(radius){
    // This line help us to keep inherted parent property into child
    Shape.call(this,'red');
    this.radius = radius;
}    


extend(Circle,Shape)
Circle.prototype.draw = function (){
    console.log("Draw Circle..");
}

function Square(size){
    Shape.call(this,'blue');
    this.size = size;
}

extend(Square,Shape)