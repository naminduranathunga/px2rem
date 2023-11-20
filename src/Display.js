import Component from "./Component";
import HistoryManager from "./HistoryManager";
import "./Display.css";

class Display extends Component{
    constructor (ele){
        //
        super();
        this.parent = ele;
        this.input_value = 0;
        this.output_value = 0;
        this.base_font_size = 16;
        this.direction = 'px2rem';
        this.mode = 'op';
        this.history = new HistoryManager(25);
    }

    on_key_pressed = (key)=>{
        if (this.mode == 'op'){
            this.calc_op_mode(key);
        }else if (this.mode == 'set'){
            this.calc_set_mode(key);

        }
        this.update();
    }

    calc_set_mode = (key)=>{
        if (key === 'CLR'){
            this.clear();
        }else if (key === 'BKS'){
            this.on_backspace_pressed();
        }else if (key === 'TGL'){
            //this.toggle_converter();
        }else if (key === 'SET'){
            //this.base_font_size = parseFloat(this.input_value);
            this.mode = "op";
            this.output_value = 0;
            this.input_value = 0;
            this.toggle_converter();
            this.toggle_converter();

            
        } else if (key === 'ENT'){
            this.base_font_size = parseFloat(this.input_value);
            this.output_value = "SAVED";
            
        } else if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' ||
        key === '6' || key === '7' || key === '8' || key === '9' || key === '.'){
            if (parseFloat(this.input_value) == 0){
                this.input_value = String(key);
            }else{
                this.input_value = (this.input_value + String(key));
            }
        }
    }

    calc_op_mode = (key)=>{
        if (key === 'CLR'){
            this.clear();
        }else if (key === 'BKS'){
            this.on_backspace_pressed();
        }else if (key === 'TGL'){
            this.toggle_converter();
        }else if (key === 'SET'){
            this.mode = "set";
            this.output_value = "SETTINGS";
            this.input_value = this.base_font_size;
            this.input_unit.innerHTML = "(px) - Base Font ";
            this.output_unit.innerHTML = "";

        } else if (key === 'ENT'){
            this.history.append({
                base: this.base_font_size,
                input: this.input_value,
                output: this.output_value,
                mode: this.mode
            });
            
        } else if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' ||
        key === '6' || key === '7' || key === '8' || key === '9' || key === '.'){
            if (parseFloat(this.input_value) == 0){
                this.input_value = String(key);
            }else{
                this.input_value = (this.input_value + String(key));
            }
        }

    }

    on_backspace_pressed = ()=>{
        let str_v = String(this.input_value);
        console.log(str_v);
        if (str_v.length > 1){
            this.input_value = (str_v.slice(0, -1));
        }else{
            this.input_value = 0;
        }
    }
    
    clear = ()=>{
        this.input_value = 0;
        this.output_value = 0;
    }

    on_event_keydown = (event)=>{
        //check the key
        let key = event.key;
        console.log(key);
        if (key === 'Backspace'){
            this.on_key_pressed("BKS");
        } else if (key === 'Enter'){
            //this.on_key_pressed('=');
        } else if (key === 'Delete'){
            this.on_key_pressed("CLR");
        } else if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' ||
            key === '6' || key === '7' || key === '8' || key === '9' || key === '.'){
            this.on_key_pressed(key);
        }
    }

    render_element = ()=>{
        var div = document.createElement('div');
        div.setAttribute('class', 'display');
        div.innerHTML = `
            <div class="display-result-box">
                <span id="text_result">0</span><span id="output_unit"> rem</span>
            </div>
            <div class="display-text-box">
                <span id="text_input">0</span><span id="input_unit"> px</span>
            </div>
        `;
        this.element = div;
        this.result_text = this.element.querySelector('#text_result');
        this.input_text = this.element.querySelector('#text_input');
        this.output_unit = this.element.querySelector('#output_unit');
        this.input_unit = this.element.querySelector('#input_unit');

        this.update();

        document.addEventListener('keydown', this.on_event_keydown);
        
        return div;
    }
    
    toggle_converter = ()=>{
        if (this.direction === 'px2rem'){
            this.direction = 'rem2px';
            this.output_unit.innerHTML = ' px';
            this.input_unit.innerHTML = ' rem';
        }else{
            this.direction = 'px2rem';
            this.output_unit.innerHTML = ' rem';
            this.input_unit.innerHTML = ' px';
        }
        this.update();
    }

    update = ()=>{

        try {
            if (this.mode == 'op'){
                if (this.direction === 'px2rem'){
                    this.output_value =  this.input_value / this.base_font_size;
                }else{
                    this.output_value =  this.input_value * this.base_font_size;
                }
                
                if (this.output_value > 0){
                    this.output_value = (Math.round((this.output_value + Number.EPSILON) * 1000) / 1000);
                }

                this.result_text.innerHTML = parseFloat(this.output_value);
            }else{
                this.result_text.innerHTML = (this.output_value);
            }

            this.input_text.innerHTML = (this.input_value);
        } catch (error) {
            this.input_text.innerHTML = "ERROR";
        }
        
    }
}

export default Display;