class Shape{
    constructor(color){
        this.color = color;
    }
    move(){
        console.log("Shape Move..");
    }

    filler(){
        console.log("Shape Filler..");
    }

}
// Inheritance
class Circle extends Shape{
    constructor(color,radius){
        super(color);
        this.radius = radius;
    }
    draw(){
        console.log("Draw..");
    }
    // Method Overriding
    filler(){
        console.log("Circle filler");
        super.filler();
    }
}

const c = new Circle('red',10);