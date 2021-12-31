function checkName(){
    　　// 验证姓名 
}
function checkEmail(){　　
    // 验证邮箱
}
function checkPassword(){　　
    // 验证密码
}
var checkName = function (){
    　　// 验证姓名 
}
var checkEmail = function (){　　
    // 验证邮箱
}
var checkPassword = function (){　　
    // 验证密码
}
//这些会创建全局变量
//用对象收编
var CheckObject1 = {
    checkName: function(){},
    checkEmail: function(){},
    checkPassword: function(){},
}
var CheckObject2 = {}
CheckObject2.checkName=function(){}
CheckObject2.checkEmail=function(){}
CheckObject2.checkPassword=function(){}

//单例
var CheckObject3 = function(){
    return {
        checkName: function(){},
        checkEmail: function(){},
        checkPassword: function(){},
    }
}
var a = CheckObject3()
a.checkEmail()

//使用类
var CheckObject4 =function(){
    this.checkName=function(){}
    this.checkEmail=function(){}
    this.checkPassword=function(){}
}
var b=new CheckObject4()
b.checkEmail()
var c=new CheckObject4()
console.log(b.checkEmail==c.checkEmail)//false
//这样会创建新的函数，每个实例使用的函数是不一样的，虽然是一样的作用，但是就像dom事件一样，复制了一份
var CheckObject5=function(){}
CheckObject5.prototype.checkName=function(){}
CheckObject5.prototype.checkEmail=function(){}
CheckObject5.prototype.checkPassword=function(){}
//这样创建的对象的每一个函数使用的都是同一函数了
var d=new CheckObject5()
var e=new CheckObject5()
console.log(d.checkEmail==e.checkEmail)//true

//可以写一起
var CheckObject6=function(){}
CheckObject6.prototype={
    checkName: function(){},
    checkEmail: function(){},
    checkPassword: function(){},
}

//
var CheckObject7 = {
    checkName: function(){
        return this
    },
    checkEmail: function(){
        return this
    },
    checkPassword: function(){
        return this
    },
}
CheckObject7.checkEmail().checkName().checkPassword()

var CheckObject8=function(){}
CheckObject8.prototype={
    checkName: function(){
        return this
    },
    checkEmail: function(){
        return this
    },
    checkPassword: function(){
        return this
    },
}
var g=new CheckObject8()
g.checkEmail().checkName().checkPassword()

//给全局Function添加方法
Function.prototype.checkEmail=function(){}
var j=function(){}
j.checkEmail()
var k=new Function()
k.checkEmail()

//封装方法
Function.prototype.addMethod=function(name,fn){
    this[name]=fn
}
var CheckObject9=function(){}
CheckObject9.addMethod('checkName',function(){})
CheckObject9.checkName()
//链式
Function.prototype.addMethod=function(name,fn){
    this[name]=fn
    return this
}
var CheckObject10=function(){}
CheckObject10.addMethod('checkName',function(){})
CheckObject10.checkName()

//使用类
Function.prototype.addMethod=function(name,fn){
    this.prototype[name]=fn
    return this
}
var CheckObject11=function(){}
CheckObject11.addMethod('checkName',function(){})

var l=new CheckObject11()
l.checkName()
