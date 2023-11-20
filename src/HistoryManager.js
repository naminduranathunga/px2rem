class HistoryManager{
    constructor (max){
        this.max = max;
        this.i = 0;
        this.h = [];
    }

    append = (data)=>{
        if (this.h.push(data) >= this.max){
            this.h.shift();
        }
        this.i = this.h.length - 1;
    }

    clear = ()=>{
        this.h = [];
        i = 0;
    }

    up = ()=>{
        if (this.i >= this.h.length - 1) return null;

        this.i++;
        return this.h[this.i];
    }

    down = ()=>{
        if (this.i <= 0) return null;

        this.i--;
        return this.h[this.i];
    }

    can_go_up = ()=>{
        return (this.i < this.h.length - 1);
    }

    can_go_down = ()=>{
        return (this.i > 0);
    }

}

export default HistoryManager;