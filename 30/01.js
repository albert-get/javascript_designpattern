/**
 * 节流模式
 */

let throttle=function (){
    let isClear=arguments[0],fn;
    if(typeof isClear==='boolean'){
        fn=arguments[1]
        fn.__throttleID&&clearTimeout(fn.__throttleID)
    }else{
        fn=isClear
        param=arguments[1]
        let p=extend({
            context:null,
            args:[],
            time:300
        },param)
        throttle(true,fn)
        fn.__throttleID=setTimeout(function (){
            fn.apply(p.context,p.args)
        },p.time)
    }
}

// 比如优化一些鼠标滑过元素而展现浮层的交互。按照以前的交互方式，当鼠标一不小心移出浮层时，浮层就会消失。有时候无意间移入元素上面就会导致浮层展现。这两种交互体验都是很糟糕的体验，所以为了优化这种体验我们也可以使用节流模式。

function $(id){
    return document.getElementById(id)
}
function $tag(tag,container){
    container=container||document
    return container.getElementsByTagName(tag)
}
class Layer{
    constructor(id) {
        this.container=$(id)
        this.layer=$tag('div',this.container)[0]
        this.lis=$tag('li',this.container)
        this.imgs=$tag('img',this.container)
        this.bindEvent()
    }
    bindEvent(){
        let that=this
        function hideLayer(){
            this.layer.className=''
        }
        function showLayer(){
            this.layer.className='show'
        }
        that.on(that.container,'mouseenter',function (){
            throttle(true,hideLayer)
            throttle(showLayer)
        }).on(that.container,'mouseleave',function (){
            throttle(hideLayer)
            throttle(true,showLayer)
        })
        for(let i=0,l=that.lis.length;i<l;i++){
            that.lis[i].index=i
            that.on(that.lis[i],'mouseenter',function (){
                let index=this.index
                for(let i=0,l=that.imgs.length;i<l;i++){
                    that.imgs[i].className=''
                }
                that.imgs[index].className='show'
                that.layer.style.left=-22+60*index+'px'
            })
        }
    }
    on(ele,type,fn){
        ele.addEventListener?ele.addEventListener(type,fn,false):ele.attachEvent('on'+type,fn)
        return this
    }
}























