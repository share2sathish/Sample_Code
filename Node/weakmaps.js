// Private Property
const _radius = new WeakMap();
// Private Method
const _draw = new WeakMap();
class Circle{
    constructor(radius){
        // Set private Property and Method
        _radius.set(this,radius);
        _draw.set(this,()=>{
            console.log("Move..",this);
        });
    }

    move(){
        // Method to Access Private Function
        _draw.get(this)();
    }

    // One Method to access Private Property
    getRadius(){
        return _radius.get(this)
    }
}

const c = new Circle(10);