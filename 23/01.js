//中介者模式


class Mediator{
    static msg={}
    static register(type,action){
        if(this.msg[type]){
            this.msg[type].push(action)
        }else{
            this.msg[type]=[]
            this.msg[type].push(action)
        }
    }
    static send(type){
        if(this.msg[type]){
            for(let i=0,len=this.msg[type].length;i<len;i++){
                this.msg[type][i]&&this.msg[type][i]()
            }
        }
    }
}
let showHideNavWidget=function (mod,tag,showOrHide){
    let modDom=document.getElementById(mod),
        tagDom=modDom.getElementsByTagName(tag),
        showOrHideF=(!showOrHide||showOrHide==='hide')?'hidden':'visible'
    for(let i=tagDom.length-1;i>=0;i--){
        tagDom.style.visibility=showOrHideF
    }
}

Mediator.register('hideAllNavNum',function (){
    showHideNavWidget('collection_nav','b',false)
})
Mediator.register('showAllNavNum',function (){
    showHideNavWidget('collection_nav','b',true)
})
Mediator.register('hideAllNavUrl',function (){
    showHideNavWidget('collection_nav','span',false)
})
Mediator.register('showAllNavUrl',function (){
    showHideNavWidget('collection_nav','span',true)
})

Mediator.register('hideAllNavNum',function (){
    showHideNavWidget('recommend_nav','b',false)
})
Mediator.register('showAllNavNum',function (){
    showHideNavWidget('recommend_nav','b',true)
})


Mediator.register('hideAllNavUrl',function (){
    showHideNavWidget('recently_nav','span','hide')
})
Mediator.register('showAllNavUrl',function (){
    showHideNavWidget('recently_nav','span','show')
})

let hideNum=document.getElementById('hide_num'),
    hideUrl=document.getElementById('hide_url')
hideNum.onchange=function (){
    if(hideNum.checked){
        Mediator.send('hideAllNavNum')
    }else{
        Mediator.send('showAllNavNum')
    }
}
hideUrl.onchange=function (){
    if(hideUrl.checked){
        Mediator.send('hideAllNavUrl')
    }else{
        Mediator.send('showAllNavUrl')
    }
}
