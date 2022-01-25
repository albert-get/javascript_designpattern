//简单模版模式

class A{
    static formateString(str,data){
        return str.replace(/\{#(\w+)#\}/g,function (match,key){
            return typeof data[key]==='undefined'?'':data[key]
        })
    }
    static listPart(data){
        let s=document.createElement('div'),
            ul='',
            ldata=data.data.li,
            tpl=A.view(['h2','p','ul']),
            liTpl=A.formateString(A.view('li'),{li:A.view(['strong','span'])})
        data.id&&(s.id=data.id)
        for(let i=0,len=ldata.length;i<len;i++){
            if(ldata[i].em||ldata.span){
                ul+=A.formateString(liTpl,ldata[i])
            }
        }
        data.data.ul=ul
        s.innerHTML=A.formateString(tpl,data.data)
        A.root.appendChild(s)
    }
    static view(name){
        let v={
            code:'<pre><code>{#code#}</code></pre>',
            img:'<img src="{#src#}" alt="{#alt#}" title="{#title#}"/>',
            part:'<div id="{#id#}" class="{#class#}">{#part#}</div>',
            theme:[
                '<div>',
                '<h1>{#title#}</h1>',
                '{#content#}',
                '</div>'
            ].join('')
        }
        if(Object.prototype.toString.call(name)==='[object Array]'){
            let tpl=''
            for(let i=0,len=name.length;i<len;i++){
                tpl+=A.view(name[i])
            }
            return tpl
        }else{
            return v[name]?v[name]:`<${name}>{#${name}#}</${name}>`
        }
    }
}