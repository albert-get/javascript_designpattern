let Book1=function (id,bookname,price){
    this.id=id
    this.bookname=bookname
    this.price=price
}
Book1.prototype.display=function (){}


let Book2=function (id,name,price){
    //私有属性
    let num=1
    //私有方法
    function checkId(){

    }
    //特权方法
    this.getName=function (){}
    this.getPrice=function (){}
    this.setName=function (){}
    this.setPrice=function (){}
    this.id = id
    this.copy=function (){}

    this.setName(name)
    this.setPrice(price)
}
//利用闭包实现静态属性的安全
let Book3=(function (){
    let bookNum=0
    function checkBook(name){}
    function _book (newId,newName,newPrice){
        let name,price
        function checkId(id){}
        this.getName=function (){}
        this.getPrice=function (){}
        this.setName=function (){}
        this.setPrice=function (){}
        this.id=newId
        this.copy=function (){}
        bookNum++
    }
    _book.prototype={
        isJsBook:false,
        display:function (){}
    }
    return _book
})();

