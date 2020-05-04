// Only function declaration  will have hoisting
test();
// Hoisting will not happen for EXpresson method, variable or class
//const cl = new Circle(100);
//console.log(a);
//testing();
class Circle {
    
    constructor(radius) {
        this.radius = radius;
        // Instance Method
        this.draw = function(){
            console.log("Draw..");
        }
    }
    // Proto type method
    color(){
        console.log("circle color red..");
    }

    // Utility function only accessable with Class not with instance object
    static fill_circle(color){
        console.log("Fill Circle with "+ color);
    }

}


const crcl = new Circle(10);
function test(){
    console.log("This is for testing");
}

const testing = function(){
    console.log("testttt..");
}

let a = 100;