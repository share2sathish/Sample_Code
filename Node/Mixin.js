const mixin = function(target, ...sources){
    // Mixin core function.
    Object.assign(target, ...sources);    
}

const canEat = {
    hunger: 1,
    eat: function(){
        console.log("Can Eat..");
    }
}

const canWalk = {
    walk: function(){
        console.log("Can Walk..");
    }
}

const canSwim = {
    swim: function(){
        console.log("Can Swim..");
    }
}

function Person(){

}

mixin(Person.prototype,canEat,canWalk);
const person = new Person()

function Fish(){

}

mixin(Fish.prototype,canEat,canSwim);
const fish = new Fish()
