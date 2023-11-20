class Component{
    constructor(){
        this.is_rendered = false;
        this.element = null;
    }
    
    
    render = ()=>{
        if(!this.is_rendered){
            this.element = this.render_element();
            this.is_rendered = true;
        }
        return this.element;
    }
}

export default Component;