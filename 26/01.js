//解释器模式



class Interpreter{
    constructor() {
        this.path=[]
        this.wrap=wrap||document


    }
    getPath(node,wrap){
        if(node===wrap){
            if(this.wrap.nodeType===1){
                this.path.push(this.wrap.nodeName.toUpperCase())
            }
            return this.path
        }
        if(node.parentNode!=wrap){
            this.path=this.getPath(node.parentNode,wrap)
        }else{
            if(this.wrap.nodeType===1){
                this.path.push(this.wrap.nodeName.toUpperCase())
            }
        }
        let sublingsNames=this.getSublingName(node)
        if(node.nodeType===1){
            this.path.push(node.nodeName.toUpperCase()+sublingsNames)
        }
        return this.path
    }
    getSublingName(node){
        if(node.previousSibling){
            let name='',
                count=1,
                nodeName=node.nodeName,
                sibling=node.previousSibling
            while (sibling){
                if(sibling.nodeType==1&&sibling.nodeType===node.nodeType&&sibling.nodeType){
                    if(nodeName==sibling.nodeName){
                        name+=++count
                    }else{
                        count=1
                        name+='|'+sibling.nodeName.toUpperCase()
                    }
                }
                sibling=sibling.previousSibling
            }
            return name
        }else{
            return ''
        }
    }
}