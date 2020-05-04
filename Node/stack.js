const _items = new WeakMap();

class Stack{
    constructor(){
        _items.set(this,[]);
        this.items = _items.get(this);
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        if(this.items.length === 0)
            throw new Error("Stack is empty..");
        return this.items.pop();
    }
    peek(){
        if(this.items.length === 0)
            throw new Error("Stack is empty..");
        return this.items[this.items.length - 1]
    }
}

const s = new Stack();