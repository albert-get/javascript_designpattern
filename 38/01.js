/**
 * mvc模式
 */
let MVC=MVC||{}
MVC.model=function (){
    let M={}
    M.data={}
    M.conf={}
    return {
        getData:function (m){
            return M.data[m]
        },
        getConf:function (c){
            return M.conf[c]
        },
        setData:function (m,v){
            M.data[m]=v
            return this
        },
        setConf:function (c,v){
            M.conf[c]=v
            return this
        }
    }
}

MVC.view=function (){
    let M=MVC.model
    let V={}
    return function (v){
        V[v]()
    }
}
MVC.crtl=function (){
    let M=MVC.model
    let V=MVC.view
    let C={}
}
