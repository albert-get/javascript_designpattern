/**
 * 异步模块模式
 */

~(function (F){
    let moduleCache={},
        setModule=function (moduleName,params,callback){
            let _module,fn
            if(moduleCache[moduleName]){
                _module=moduleCache[moduleName]
                _module.status='loaded'
                _module.exports=callback?callback.apply(_module,param):null
                while (fn=_module.onload.shift()){
                    fn(_module.exports)
                }
            }else{
                callback&&callback.apply(null,params)
            }
        },
        loadModule=function (moduleName,callback){
            let _module
            if(moduleCache[moduleName]){
                _module=moduleCache[moduleName]
                if(_module.status==='loaded'){
                    setTimeout(callback(_module.exports),0)
                }else{
                    _module.onload.push(callback)
                }
            }else{
                moduleCache[moduleName]={
                    moduleName:moduleName,
                    status:'loading',
                    exports:null,
                    onload:[callback]
                }
                loadScript(getUrl(moduleName))
            }
        },
        getUrl=function (moduleName){
            return String(moduleName).replace(/.js$/g,'')+'.js'
        },
        loadScript=function (src){
            let _script=document.createElement('script')
            _script.type='text/JavaScript'
            _script.charset='UTF-8'
            _script.async=true
            _script.src=src
            document.getElementsByTagName('head')[0].appendChild(_script)
        }


})((function (){
    return window.F={}
})())

F.module=function (url1,modDeps,modCallback){
    let args=[].slice.call(arguments),
        callback=args.pop(),
        deps=(args.length&&args[args.length-1]instanceof Array)?args.pop():[],
        url=args.length?args.pop():null,
        params=[],
        depsCount=0,
        i=0,
        len;
    if(len=deps.length){
        while (i<len){
            (function (i){
                depsCount++
                loadModule(deps[i],function (mod){
                    params[i]=mod
                    depsCount--
                    if(depsCount==0){
                        setModule(url,param,callback)
                    }
                })
            })(i)
            i++
        }
    }else{
        setModule(url,[],callback)
    }
}