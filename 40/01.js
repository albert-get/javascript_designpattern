/**
 * MVVM模式
 */

~(function (){
    let window=this||(0,eval)('this')
    let FONTSIZE=function (){
        return parseInt(document.body.currentStyle?document.body.currentStyle['fontSize']:getComputedStyle(document.body,false)['fontSize'])
    }()
    let VM=function (){
        let Method={
            progressbar:function (dom,data){
                let progress=document.createElement('div'),
                    param=data.data
                progress.style.width=(param.position||100)+'%'
                dom.className+=' ui-progressbar'
                dom.appendChild(progress)
            },
            slider:function (dom,data){
                let bar=document.createElement('span'),
                    progress=document.createElement('div'),
                    totleText=null,
                    progressText=null,
                    param=data.data,
                    width=dom.clientWidth,
                    left=dom.offsetLeft,
                    realWidth=(param.position||100)*width/100
                dom.innerHTML=''
                if(param.totle){
                    text=document.createElement('b')
                    progressText=document.createElement('em')
                    text.innerHTML=param.totle
                    dom.appendChild(text)
                    dom.appendChild(progressText)
                }
                setStyle(realWidth)
                dom.className+=' ui-slider'
                dom.appendChild(progress)
                dom.appendChild(bar)
                function setStyle(w){
                    progress.style.width=w+'px'
                    bar.style.left=w-FONTSIZE/2+'px'
                    if(progressText){
                        progressText.style.left=w-FONTSIZE/2*2.4+'px'
                        progressText.innerHtml=parseFloat(w/width*100).toFixed(2)+'%'
                    }
                }
            }
        }
        function getBindData(dom){
            let data=dom.getAttribute('data-bind')
            return !!data&&(new Function("return ({"+data+"})"))()
        }
        return function (){
            let doms=document.body.getElementsByTagName('*'),
                ctx=null
            for(let i=0,len=doms.length;i<len;i++){
                ctx=getBindData(doms[i])
                ctx.type&&Method[ctx.type]&&Method[ctx.type](doms[i],ctx)
            }
        }
    }()
    window.VM=VM
})()