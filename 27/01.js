//链模式

let A=function (selector,context){
    return new A.fn.init(selector,context)
}
A.fn=A.prototype={
    constructor:A,
    init:function (selector,context){
        this.length=0
        context=context||document
        if(~selector.indexOf('#')){
            this[0]=document.getElementById(selector.slice(1))
            this.length=1
        }else{
            let doms=context.getElementsByTagName(selector),
                i=0,
                len=doms.length
            for(;i<len;i++){
                this[i]=doms[i]
            }
            this.length=len
        }
        this.context=context
        this.selector=selector
        return this
    },
    length:2,
    size:function (){
        return this.length
    }
}
A.extend=A.fn.extend=function (){
    let i=1,
        len=arguments.length,
        target=arguments[0],
        j
    if(i==len){
        target=this
        i--
    }
    for(;i<len;i++){
        for(j in arguments){
            target[j]=arguments[i][j]
        }
    }
    return target
}
A.extend({
    on:(function (){
        if(document.addEventListener){
            return function (type,fn){
                let i=this.length-1
                for(;i>=0;i--){
                    this[i].addEventListener(type,fn,false)
                }
                return this
            }
        }else if(document.attachEvent){
            return function (type,fn){
                let i=this.length-1
                for(;i>=0;i--){
                    this[i].attachEvent('on'+type,fn)
                }
                return this
            }
        }else{
            return function (type,fn){
                let i=this.length-1
                for(;i>=0;i--){
                    this[i]['on'+type]=fn
                }
                return this
            }
        }
    })()
})
A.extend({
    camelCase:function (str){
        return str.replace(/\-(\w)/g,function (all,letter){
            return letter.toUpperCase()
        })
    }
})
A.extend({
    css:function (){
        let arg=arguments,
            len=arg.length
        if(this.length<1){
            return this
        }
        if(len===1){
            if(typeof arg[0]==='string'){
                if(this[0].currentStyle){
                    return this[0].currentStyle[name]
                }else{
                    return getComputedStyle(this[0],false)[name]
                }
            }
        }else if(typeof arg[0]==='object'){
            for(let i in arg[0]){
                for(let j=this.length-1;j>=0;j--){
                    this[j].style[A.camelCase(i)]=arg[0][i]
                }
            }
        }else if(len===2){
            for(let j=this.length-1;j>=0;j--){
                this[j].style[A.camelCase(arg[0])]=arg[1]
            }
        }
        return this
    }
})
A.fn.extend({
    attr:function (){
        let arg=arguments,
            len=arg.length
        if(this.length<1){
            return this
        }
        if(len===1){
            if(typeof arg[0]==='string'){
                return this[0].getAttribute(arg[0])
            }else if(typeof arg[0]==='object'){
                for(let i in arg[0]){
                    for(let j=this.length-1;j>=0;j--){
                        this[j].setAttribute(i,arg[0][i])
                    }
                }
            }
        }else if(len===2){
            for(let j=this.length-1;j>=0;j--){
                this[j].setAttribute(arg[0],arg[1])
            }
        }
        return this
    }
})