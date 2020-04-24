// - Method -1
/*// Method 1 - Using Object literal creating Object in Java script
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log("Draw Circle using object literal method");
    }
}

circle.draw();*/


// Method - 2
/*// If Object having function or more than one function ( Behaviour )
// Object literal not correct way to create the function
// We can use Factory moethod or Constructore

//Method 2 - Factory function

function createCircle(radius){
    // In Es6 key and value is having same nameing conversion
    // To avoid duplication we can use directly the name ( here radius )
    return {
        radius,
        draw: function(){
            console.log("Draw Circle Using Factory Method.")
        }
    };
}

const circle = createCircle(1);
circle.draw();*/

// Method - 3
// Using constructor creating Object

function Circle(radius){
    console.log("this: ", this);
    this.radius = radius;
    this.draw = function (){
        console.log("Draw Circle using Constructor Function.");
    }
}


// new operator - Creating empty object ans then assigning cricle object into it
// If we does not give new operator this refer global object , here in JS its window object
const circle = new Circle(1);
//const circle = Circle.call({},1);
//console.log(circle.radius);
circle.draw();


