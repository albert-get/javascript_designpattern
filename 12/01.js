//装饰者模式

let decorator=function (input,fn){
    let inputdom=document.getElementById(input)
    if(typeof inputdom.onclick==='function'){
        let oldclickFn=inputdom.onclick
        inputdom.onclick=function (){
            oldclickFn()
            fn()
        }
    }else {
        inputdom.onclick=fn
    }
}
