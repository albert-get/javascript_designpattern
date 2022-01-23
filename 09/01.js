//外观模式

/**
 * 当做一件事情要考虑多种情况，兼容不同的时候
 */

function addEvent(dom,type,fn){
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false)
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type,fn)
    }else {
        dom['on'+type]=fn
    }
}
