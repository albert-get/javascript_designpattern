//1
//类式继承
function SuperClass(){
    this.superValue=true
}
SuperClass.prototype.getSuperValue=function (){
    return this.superValue
}
function SubClass(){
    this.subValue=false
}
SubClass.prototype=new SuperClass()
SubClass.prototype.getSubValue=function (){
    return this.subValue
}

//实例互相共享，修改一个实例会影响其他实例
//可以继承方法

//2
//构造函数继承
function SuperClass(id){
    this.books=['JavaScript','html','css']
    this.id=id
}
SuperClass.prototype.showBooks=function (){
    return this.books
}
function SubClass(id){
    SuperClass.call(this,id)
}
//可以继承属性，不能继承方法，不能复用

//3
//组合继承
function SuperClass(name){
    this.name=name
    this.books=['JavaScript','html','css']
}
SuperClass.prototype.getName=function (){
    return this.name
}
function SubClass(name,time){
    SuperClass.call(this,name)
    this.time=time
}
SubClass.prototype=new SuperClass()
SubClass.prototype.getTime=function (){
    return this.time
}
//在使用构造函数继承时执行了一遍父类的构造函数，而在实现子类原型的类式继承时又调用了一遍父类构造函数
//性能不是最优的
//4
//原型式继承
function inheritObject(o){
    function F(){}
    F.prototype=o
    return new F()
}
//继承属性不能继承方法
//寄生式继承
function inheritObject2(obj){
    let o=new inheritObject(obj)
    o.getName=function (){
        return this.name
    }
    return o
}
//寄生组合继承
function inheritPrototype(subClass,superClass){
    let p=inheritObject(superClass.prototype)
    p.constructor=subClass
    subClass.prototype=p
}
function SuperClass(name){
    this.name=name
    this.books=['JavaScript','html','css']
}
SuperClass.prototype.getName=function (){
    return this.name
}
function SubClass(name,time){
    SuperClass.call(this,name)
    this.time=time
}
SubClass.prototype=inheritPrototype(SubClass,SuperClass)
SubClass.prototype.getTime=function (){
    return this.time
}

//多继承

function extend(target,source){
    for(let prototype in source){
        target[prototype]=source[prototype]
    }
    return target
}

//多态
function add(){
    let args=arguments
    let len=args.length
    switch (len){
        case 0:
            return 10;
        case 1:
            return 10+args[0];
        case 2:
            return args[0]+args[1];
    }
}

