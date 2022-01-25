/**
 * 模块化
 */

let F=F||{}
F.define=function (str,fn){
    let parts=str.split('.'),
        old=parent=this,
        i=len=0
    if(parts[0]==='F'){
        parts=parts.slice(1)
    }
    if(parts[0]==='define'||parts[0]==='module'){
        return
    }
    for(len=parts.length;i<len;i++){
        if(typeof parent[parts[i]]==='undefined'){
            parent[parts[i]]={}
        }
        old=parent
        parent=parent[parts[i]]
    }
    if(fn){
        old[parts[--i]]=fn()
    }
    return this
}
F.define('string',function (){
    return {
        trim:function (str){
            return str.replace(/^\s+|\s+$/g,'')
        }
    }
})
F.define('dom',function (){
    let $=function (id){
        $.dom=document.getElementById(id)
        return $
    }
    $.html=function (html){
        if(html){
            this.dom.innerHTML=html
            return this
        }else{
            return this.dom.innerHTML
        }
    }
    return $
})
F.module=function (){
    let args=[].slice.call(arguments),
        fn=args.pop(),
        parts=args[0]&&args[0]instanceof Array?args[0]:args,
        module=[],
        modIDs='',
        i=0,
        ilen=parts.length,
        parent,j,jlen;
    while (i<ilen){
        if(typeof parts[i]==='string'){
            parent=this
            modIDs=parts[i].replace(/^F\./,'').split('.')
            for(j=0,jlen=modIDs.length;j<jlen;j++){
                parent=parent[modIDs[j]]||false
            }
        module.push(parent)
        }else{
            module.push(parts[i])
        }
        i++
    }
    fn.apply(null,module)
}