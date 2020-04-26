function Abstract(radius){
    let defaultLocation = {x:0,y:0};
    let optimumLocation = function(factor){
        console.log(factor);
    }
    this.radius = radius;
    this.draw = function (){
        console.log(defaultLocation);
        optimumLocation(10);
        console.log("Draw Circle using from abstraction.js");
    }
}

const abstract = new Abstract(5);
abstract.draw();
