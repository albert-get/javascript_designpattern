/**
 * 参与者模式
 */

if(Function.prototype.bind===undefined){
    Function.prototype.bind=function (context){
        let slice=Array.prototype.slice,
            args=slice(arguments,1),
            that=this
        return function (){
            let addArgs=slice.call(arguments),
                allArgs=args.concat(addArgs)
            return that.apply(context,allArgs)
        }
    }
}