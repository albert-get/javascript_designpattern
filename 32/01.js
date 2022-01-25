/**
 * 惰性模式
 */

//网页第一次加载时执行
let createXHR=(function (){
    if(typeof XMLHttpRequest!='undefined'){
        return function (){
            return new XMLHttpRequest()
        }
    }else if(typeof ActiveXObject!='undefined'){
        return function (){

        }
    }else{
        return function (){
            throw new Error('No XHR object available')
        }
    }
})()

//第一次调用函数时执行
function createXHR2(){
    if(typeof XMLHttpRequest!='undefined'){
        createXHR2=function (){
            return new XMLHttpRequest()
        }
    }else if(typeof ActiveXObject!='undefined'){
        createXHR2=function (){

        }
    }else{
        createXHR2=function (){
            throw new Error('No XHR object available')
        }
    }
    return createXHR2()
}

let a
a=function (){
    if(true){
        a=function (){
            return 'b'
        }
    }
    return a()
}
console.log(a())
console.log(a)
console.log(a)