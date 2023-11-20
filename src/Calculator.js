import Component from "./Component";
import Display from "./Display";
import Keypad from "./Keypad";
const github_ico = require("./svg/github.svg");

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

        var div2 = document.createElement('div');
        div2.innerHTML = `<a href="https://github.com/naminduranathunga/px2rem/" target="_blank" style="margin-top:0.25rem; display:block;"><span class="small-icon">${github_ico}</span> <i>Github.com/naminduranathunga/px2rem/</i></a>`;
        div.appendChild(div2);
        this.is_rendered = true;
        return div;
    }
}

export default Calculator;