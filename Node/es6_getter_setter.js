
const _radius = new WeakMap();

class Circle{
    constructor(radius){
        // Set private Property using setter
        _radius.set(this,radius);
        
    }

    set radius(value){
        if(value <= 0) 
            throw new Error("Radious should be greater than zero.")
        // Set private Property using setter
        _radius.set(this,value);
    }

    // Getter Method to access Private Property
    get radius(){
        return _radius.get(this);
    }
    
}

const c = new Circle(10);