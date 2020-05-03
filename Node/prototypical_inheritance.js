function extend(Child,Parent){
    Child.prototype = new Parent();
    Child.prototype.construcor = Child;
}

// Constructor 1
function HtmlElement(){
    this.click = function(){
        console.log("Click..");
    }
}

HtmlElement.prototype.focus = function(){
    console.log("Focus..");
}

// Constructor 2
function HtmlSelectElement(items = []){
    this.items = items;
    this.addItems = function(item){
        this.items.push(item);
    }
    this.removeItems = function(item){
        this.items.splice(this.items.indexOf(items),1)
    }
    this.render = function(){
        return `<select>
                ${this.items.map(item =>`<option>${item}</option>`).join('')}
                </select>`;
    }
}

extend(HtmlSelectElement,HtmlElement);

//Constructor 3
function HtmlImageElement(src){
    this.src = src;
    this.render = function(){
        return `<img src="${this.src}"\>`;
    }
}

extend(HtmlImageElement,HtmlElement);

const html_element = new HtmlElement();
const html_select = new HtmlSelectElement([10,20,30]);
const html_img = new HtmlImageElement('https://google.com');