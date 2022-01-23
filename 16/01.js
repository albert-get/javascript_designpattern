//模版方法模式

class Alert{
    constructor(data) {
        if(!data){
            return
        }
        this.content=data.content
        this.panel=document.createElement('div')
        this.contentNode=document.createElement('p')
        this.confirmBtn=document.createElement('span')
        this.closeBtn=document.createElement('b')
        this.panel.className='alert'
        this.closeBtn.className='a-close'
        this.confirmBtn.className='a-confirm'
        this.confirmBtn.innerHTML=data.confirm||'确认'
        this.contentNode.innerHTML=data.content
        this.success=data.success||function (){}
        this.fail=data.fail||function (){}
    }
    init(){
        this.panel.appendChild(this.closeBtn)
        this.panel.appendChild(this.contentNode)
        this.panel.appendChild(this.confirmBtn)
        document.body.appendChild(this.panel)
        this.bindEvent()
        this.show()
    }
    bindEvent(){
        let me=this
        this.closeBtn.onclick=function (){
            me.fail()
            me.hide()
        }
        this.confirmBtn.onclick=function (){
            me.success()
            me.hide()
        }
    }
    hide(){
        this.panel.style.display='none'
    }
    show(){
        this.panel.style.display='block'
    }
}

class RightAlert extends Alert{
    constructor(data) {
        super(data);
        this.confirmBtn.className=this.confirmBtn.className+' right'
    }
}
class TitleAlert extends Alert{
    constructor(data) {
        super(data);
        this.title=data.title
        this.titleNode=document.createElement('h3')
        this.titleNode.innerHTML=this.title
    }
    init() {
        this.panel.insertBefore(this.titleNode,this.panel.firstChild)
        super.init();
    }
}
class CancelAlert extends TitleAlert{
    constructor(data) {
        super(data);
        this.cancel=data.cancel
        this.cancelBtn=document.createElement('span')
        this.cancelBtn.className='cancel'
        this.cancelBtn.innerHTML=this.cancel||'取消'
    }
    init() {
        super.init();
        this.panel.appendChild(this.cancelBtn)
    }
    bindEvent() {
        let me=this
        super.bindEvent.call(me);
        this.cancelBtn.onclick=function (){
            me.fail()
            me.hide()
        }
    }
}

new CancelAlert({
    title:'提示标题',
    content:'提示内容',
    success:function (){
        console.log('ok')
    },
    fail:function (){
        console.log('cancel')
    }
}).init()
