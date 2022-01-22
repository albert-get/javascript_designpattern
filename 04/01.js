//工厂方法模式

class Factory {
    constructor(type,content) {
        return new this[type](content)
    }
    Java=class Java {
        constructor(content) {
            this.content=content
        }
    }
    Php=class Php {
        constructor(content) {
            this.content=content
        }
    }
}
//类中类，可以直接通过对象的属性来查找创建
let java=new Factory('Java','后端')
console.log(java)


