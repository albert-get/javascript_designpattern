/**
 * widget模式
 *
 */


let _TplEngine=function (str,data){
    if(data instanceof Array){
        let html='',
            i=0,
            len=data.length
        for(;i<len;i++){
            html+=_getTpl(str)(data[i])
        }
        return html
    }else{
        return _getTpl(str)(data)
    }
}
let _getTpl=function (str){
    let ele=document.getElementById(str)
    if(ele){
        let html=/^(textarea|input)$/i.test(ele.nodeName)?ele.value:ele.innerHTML
        return _compileTpl(html)
    }else{
        _compileTpl(str)
    }
}
let _dealTpl=function (str){
    let _left='{%',
        _right='%}'
    return String(str).replace(/&lt;/g,'<')
        .replace(/&gt;/g,'>')
        .replace(/[\r\t\n]/g,'')
        .replace(new RegExp(_left+'=(.*?)'+_right,'g'),"',typeof($1)==='undefined'?'':$1,'")
        .replace(new RegExp(_left,'g'),"');")
        .replace(new RegExp(_right,'g'),"template_array.push('")
}
let _compileTpl=function (str){
    let fnBody=`
    let template_array=[];
    let fn=(function(data){
        let template_key='';
        for(key in data){
            template_key+=('let '+key+'=data[\"'+key+'\"];');
        }
        eval(template_key);
        template_array.push('"+_dealTpl(str)+"');
        template_key=null;
    })(template_data)
    fn=null;
    return template_array.join('');
    `
}