import Component from "./Component";

class SingleKey extends Component{
    constructor (value, on_key_pressed){
        //
        super();
        this.value = value;
        this.on_key_pressed = on_key_pressed;
        if (typeof (value.toggle) !== 'undefined'){
            this.toggle = 0;
        }
    }

    toggle_text = ()=>{
        if (typeof (this.value.toggle) === 'undefined'){
            return;
        }
        if (this.toggle == 0){
            this.toggle = 1;
            this.element.innerHTML = `<span>${this.value.toggle}</span>`;
        }else{
            this.toggle = 0;
            this.element.innerHTML = `<span>${this.value.value}</span>`;
        }
    }

    on_btn_click = ()=>{
        this.toggle_text();
        if (typeof(this.on_key_pressed) === 'function'){
            this.on_key_pressed(this.value.name);
        }
    }


    render_element = ()=>{
        if (this.is_rendered) return this.element;

        var div = document.createElement('div');
        div.setAttribute('class', 'single-key');
        if (typeof (this.value.colspan) !== 'undefined'){
            div.classList.add('colspan-' + this.value.colspan);
        }
        div.innerHTML = `<span>${this.value.value}</span>`;
        this.element = div;
        this.is_rendered = true;
        div.addEventListener('click', this.on_btn_click);
        return div;
    }
}

export default SingleKey;