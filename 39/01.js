/**
 * MVP模式
 */

let MVP=MVP||{}
MVP.view=function (){
    let REPLACEKEY='__REPLACEKEY__'
    function getHtml(str,replacePos){}
    function eachArray(arr,fn){
        for(let i=0,len=arr.length;i<len;i++){
            fn(i,arr[i],len)
        }
    }
    function formateItem(str,rep){
        return str.replace(new RegExp(REPLACEKEY,'g'),rep)
    }
    return function (str){
        let part=str.replace(/^\s+|\s$/g,'')
            .replace(/^\s+(>)\s+/g,'$1')
            .split('>'),
            html=REPLACEKEY,
            item,
            nodeTpl;
        eachArray(part,function (partIndex,partValue,partLen){
            item=partValue.split('+')
            nodeTpl=REPLACEKEY
            eachArray(item,function (itemIndex,itemValue,itemLen){
                nodeTpl=formateItem(nodeTpl,getHtml(itemValue,itemIndex===itemLen-1?(partIndex===partLen-1?'':'in'):'add'))
                html=formateItem(html,nodeTpl)
            })
        })
        return html
    }
}()