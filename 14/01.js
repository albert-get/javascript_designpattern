//组合模式

class News{
    constructor() {
        this.children=[]
        this.element=null
    }
    init(){
        throw Error('重写你的方法')
    }
    add(){
        throw Error('重写你的方法')
    }
    getElement(){
        throw Error('重写你的方法')
    }
}
class Container extends News{
    constructor(id,parent) {
        super();
        this.id=id
        this.parent=parent
        this.init()
    }
    init() {
        this.element=document.createElement('ul')
        this.element.id=id
        this.element.className='new-container'
    }
    add(child){
        this.children.push(child)
        this.element.appendChild(child.getElement())
        return this
    }
    getElement() {
        return this.element
    }

    show(){
        this.parent.appendChild(this.element)
    }
}
class Item extends News{
    constructor(classname) {
        super();
        this.classname=classname||''
        this.init()
    }
    init(){
        this.element=document.createElement('li')
        this.element.className=this.classname
    }
    add(child){
        this.children.push(child)
        this.element.appendChild(child.getElement())
        return this
    }
    getElement() {
        return this.element
    }
}
class NewsGroup extends News{
    constructor(classname) {
        super();
        this.classname=classname||''
        this.init()
    }
    init(){
        this.element=document.createElement('div')
        this.element.className=this.classname
    }
    add(child) {
        this.children.push(child)
        this.element.appendChild(child.getElement())
        return this
    }
    getElement() {
        return this.element
    }
}
class ImageNews extends News{
    constructor(url,href,classname) {
        super();
        this.url=url||''
        this.href=href||'#'
        this.classname=classname||'normal'
        this.init()
    }
    init(){
        this.element=document.createElement('a')
        let img=new Image()
        img.src=this.url
        this.element.appendChild(img)
        this.element.className='image-news '+this.classname
        this.element.href=this.href
    }
    add() {

    }
    getElement() {
        return this.element
    }
}

class IconNews extends News{
    constructor(text,href,type) {
        super();
        this.text=text||''
        this.href=href||'#'
        this.type=type||'video'
        this.init()
    }
    init() {
        this.element=document.createElement('a')
        this.element.innerHTML=this.text
        this.element.href=this.href
        this.element.className='icon '+this.type
    }
    add() {

    }
    getElement() {
        return this.element
    }
}
class EasyNews extends News{
    constructor(text,href) {
        super();
        this.text=text||''
        this.href=href||'#'
        this.init()
    }
    init() {
        this.element=document.createElement('a')
        this.element.innerHTML=this.text
        this.element.href=this.href
        this.element.className='text'
    }
    add() {

    }
    getElement() {
        return this.element
    }
}
class TypeNews extends News{
    constructor(text,href,type,pos) {
        super();
        this.text=text||''
        this.href=href||'#'
        this.type=type||''
        this.pos=pos||'left'
        this.init()
    }
    init() {
        this.element=document.createElement('a')
        if(this.pos==='left'){
            this.element.innerHTML='['+this.type+'] '+this.text
        }else {
            this.element.innerHTML=this.text+' ['+this.type+']'
        }
        this.element.href=this.href
        this.element.className='text'
    }
    add() {

    }
    getElement() {
        return this.element
    }
}

let news1=new Container('news',document.body)
news1.add(
    new Item('normal').add(
        new IconNews('梅西不拿金球也伟大','#','video')
    )
).add(
    new Item('normal').add(
        new IconNews('保护强国强队用意明显','#','live')
    )
).add(
    new Item('normal').add(
        new NewsGroup('has-img').add(
            new ImageNews('img/1.jpeg','#','small')
        ).add(
            new EasyNews('从240斤胖子变型男','#')
        ).add(
            new EasyNews('五大雷人跑步机','#')
        )
    )
).add(
    new Item('normal').add(
        new TypeNews('AK47不愿为费城打球','#','NBA','left')
    )
).add(
    new Item('normal').add(
        new TypeNews('火炮飚6三分创新高','#','CBA','right')
    )
)
