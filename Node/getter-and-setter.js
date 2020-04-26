function Getandset(radius){
    let defaultValue = {x:10,y:20};
    this.radius = radius;
    this.draw = function (){
        console.log("Draw Circle from getter and setter.js");
    }
    this.defaultvalreader = function(){
        return defaultValue;
    }
    // Getter and Setter setup agains property
    Object.defineProperty(this,'defaultValue',{
        get: function(){
            return defaultValue;
        },
        set: function(value){
            defaultValue = value;
        }

    });
}

const getset = new Getandset(5);
getset.draw();
// One method of reading local variable of GetandSet
// Here local variable is defaultValue
console.log(getset.defaultvalreader());
// Setter
getset.defaultValue = {x:1000, y:2000};
// Getter
console.log(getset.defaultValue);
