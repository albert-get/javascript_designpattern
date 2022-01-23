
//适配器模式

/**
 * 底层用一个框架，外面封装一层
 */

let A
A=A||{}
A.on=function (id,type,fn){
    let dom=typeof id==='string'?$('#'+id):$(id)
    addEvent(dom,type,fn)
}

//适配数据

function ajaxAdapter(data){
    return [data['key1'],data['key2'],data['key3']]
}

$.ajax({
    url:'something',
    success:function (data,status){
        if(data){
            doSomething(ajaxAdapter(data))
        }
    }
})
