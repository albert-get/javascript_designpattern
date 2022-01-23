//观察者模式

class Observer{
    messages={}
    register(type,fn){
        if(typeof this.messages[type]==='undefined'){
            this.messages[type]=[fn]
        }else {
            this.messages[type].push(fn)
        }
    }
    fire(type,args){
        if(!this.messages[type]){
            return
        }
        let events={
            type,
            args:args||{}
        }
        let i=0
        let len=this.messages[type].length
        for(;i<len;i++){
            this.messages[type][i].call(this,events)
        }

    }
    remove(type,fn){
        if(this.messages[type] instanceof Array){
            let i=this.messages[type].length-1
            for(;i>=0;i--){
                this.messages[type][i]===fn&&this.messages[type].splice(i,1)
            }
        }
    }
}
