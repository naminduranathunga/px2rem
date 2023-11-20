import Component from "./Component";
import SingleKey from "./SingleKey";
import './Keypad.css';

class Keypad extends Component{
    constructor (on_key_pressed){
        //
        super();
        this.keys = [];
        this.on_key_pressed = on_key_pressed;
    }

    render = ()=>{
        var div = document.createElement('div');
        div.setAttribute('class', 'keypad');
        const newLocal = '';
        let keyset = [ /* 0 to 9 and ., CLR, TOGGLE, Backspace */
            {name: "TGL", value: '🙃', toggle:"🙂"},
            {name: 'CLR', value: 'CLR'},
            {name: 'BKS', value: "⬅️", colspan: 2},
            {name: '7', value: '7'},
            {name: '8', value: '8'},
            {name: '9', value: '9'},
            {name: 'UP', value: '⬆️'},
            {name: '4', value: '4'},
            {name: '5', value: '5'},
            {name: '6', value: '6'},
            {name: 'DN', value: '⬇️'},
            {name: '1', value: '1'},
            {name: '2', value: '2'},
            {name: '3', value: '3'},
            {name: 'SET', value: '⚙️'},
            {name: '0', value: '0', colspan: 2},
            {name: '.', value: '.'},
            {name: 'ENT', value: '✅'},

        ]
        //keyset = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '=', 'CLR'];
        keyset.forEach((key)=>{
            let key_element = new SingleKey(key, this.on_key_pressed);
            this.keys.push(key_element);
            div.appendChild(key_element.render());
        });
        return div;
    }
}

export default Keypad;