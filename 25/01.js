//迭代器模式

class Iterator{
    constructor(items,container) {
        this.container=container&&document.getElementById(container)||document
        this.items=this.container.getElementsByTagName(items)
        this.length=this.items.length
        this.index=0
        this.splice=[].splice
    }
    first(){
        this.index=0
        return this.items[this.index]
    }
    second(){
        this.index=this.length-1
        return this.items[this.index]
    }
    pre(){
        if(--this.index>0){
            return this.items[this.index]
        }else{
            this.index=0
            return null
        }
    }
    next(){
        if(++this.index<this.length){
            return this.items[this.index]
        }else {
            this.index=this.length-1
            return null
        }
    }
    get(num){
        this.index=num>=0?num%this.length:num%this.length+this.length
        return this.items[this.index]
    }
    dealEach(fn){
        let args=this.splice.call(arguments,1)
        for(let i=0;i<this.length;i++){
            fn.apply(this.items[i],args)
        }
    }
    dealItem(num,fn){
        fn.apply(this.get(num),this.splice.call(arguments,2))
    }
    exclusive(num,allFn,numFn){
        this.dealEach(allFn)
        if(Object.prototype.toString.call(num)==='[object Array]'){
            for(let i=0,len=num.length;i<len;i++){
                this.dealItem(num[i],numFn)
            }
        }else{
            this.dealItem(num,numFn)
        }
    }
}