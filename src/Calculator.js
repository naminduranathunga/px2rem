import Component from "./Component";
import Display from "./Display";
import Keypad from "./Keypad";

class Calculator extends Component{
    constructor (){
        super();
        this.display = new Display();
        this.keypad = new Keypad(this.display.on_key_pressed);
    }

    render = ()=>{
        if (this.is_rendered) return this.element;

        var div = document.createElement('div');
        div.setAttribute('class', 'calculator');
        div.appendChild(this.display.render());
        div.appendChild(this.keypad.render());
        this.is_rendered = true;
        return div;
    }
}

export default Calculator;