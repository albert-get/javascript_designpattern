//访问者模式

let Visitor=(function (){
    return {
        splice:function (){
            let arg=Array.prototype.splice.call(arguments,1)
            return Array.prototype.splice.apply(arguments[0],arg)
        },
        push:function (){
            let len=arguments[0].length||0
            let args=this.splice(arguments,1)
            arguments[0].length=len+arguments.length-1
            return Array.prototype.push.apply(arguments[0],args)
        },
        pop:function (){
            return Array.prototype.pop.apply(arguments[0])
        }
    }
})